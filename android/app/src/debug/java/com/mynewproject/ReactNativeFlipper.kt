package com.mynewproject

import android.content.Context
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.android.utils.FlipperUtils
import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin
import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin
import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin
import com.facebook.flipper.plugins.inspector.DescriptorMapping
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.network.NetworkingModule
import okhttp3.OkHttpClient

class ReactNativeFlipper {
    companion object {
        fun initializeFlipper(context: Context, reactInstanceManager: ReactInstanceManager) {
            if (FlipperUtils.shouldEnableFlipper(context)) {
                val client = AndroidFlipperClient.getInstance(context)
                client.addPlugin(InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()))
                client.addPlugin(DatabasesFlipperPlugin(context))
                client.addPlugin(SharedPreferencesFlipperPlugin(context))
                client.addPlugin(CrashReporterPlugin.getInstance())

                val networkFlipperPlugin = NetworkFlipperPlugin()
                NetworkingModule.setCustomClientBuilder { builder: OkHttpClient.Builder ->
                    builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkFlipperPlugin))
                }
                client.addPlugin(networkFlipperPlugin)
                client.start()

                // 获取自定义的Metro端口
                val metroPort = context.resources.getString(R.string.metro_port)
                val defaultPort = "8081"
                val port = if (metroPort.isNotEmpty()) metroPort else defaultPort

                // 设置自定义端口
                reactInstanceManager.addReactInstanceEventListener(object : ReactInstanceManager.ReactInstanceEventListener {
                    override fun onReactContextInitialized(reactContext: ReactContext) {
                        reactContext.catalystInstance.setGlobalVariable("Metro_Port", port)
                        reactInstanceManager.removeReactInstanceEventListener(this)
                    }
                })
            }
        }
    }
}
