package com.mynewproject

import android.content.Context
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext

class ReactNativeFlipper {
    companion object {
        fun initializeFlipper(context: Context, reactInstanceManager: ReactInstanceManager) {
            try {
                // 获取自定义的Metro端口
                val metroPort = context.resources.getString(R.string.metro_port)
                val defaultPort = "8088"
                val port = if (metroPort.isNotEmpty()) metroPort else defaultPort

                // 设置自定义端口
                reactInstanceManager.addReactInstanceEventListener(object : ReactInstanceManager.ReactInstanceEventListener {
                    override fun onReactContextInitialized(reactContext: ReactContext) {
                        reactContext.catalystInstance.setGlobalVariable("Metro_Port", port)
                        reactInstanceManager.removeReactInstanceEventListener(this)
                    }
                })
            } catch (e: Exception) {
                // 捕获初始化错误，防止应用崩溃
                e.printStackTrace()
            }
        }
    }
}
