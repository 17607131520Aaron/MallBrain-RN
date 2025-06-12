package com.mynewproject

import android.content.Context
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.android.utils.FlipperUtils
import com.facebook.flipper.core.FlipperClient
import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin
import com.facebook.flipper.plugins.inspector.DescriptorMapping
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.network.NetworkingModule
import com.facebook.react.ReactInstanceEventListener

/**
 * Class responsible for loading Flipper inside your React Native application.
 * This is the implementation for React Native 0.79.2
 */
object ReactNativeFlipper {
    fun initializeFlipper(context: Context, reactInstanceManager: ReactInstanceManager) {
        if (!FlipperUtils.shouldEnableFlipper(context)) {
            return
        }

        val client: FlipperClient = AndroidFlipperClient.getInstance(context)

        // 核心插件
        client.addPlugin(InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()))
        client.addPlugin(CrashReporterPlugin.getInstance())

        // 网络插件
        val networkFlipperPlugin = NetworkFlipperPlugin()
        NetworkingModule.setCustomClientBuilder { builder ->
            builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkFlipperPlugin))
        }
        client.addPlugin(networkFlipperPlugin)

        // Hermes调试器监听器
        if (reactInstanceManager.currentReactContext == null) {
            reactInstanceManager.addReactInstanceEventListener(
                object : ReactInstanceEventListener {
                    override fun onReactContextInitialized(reactContext: ReactContext) {
                        reactInstanceManager.removeReactInstanceEventListener(this)
                        client.start()
                    }
                })
        } else {
            client.start()
        }
    }
}
