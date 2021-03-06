/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package no.kernel.GeoKulTur;

import java.io.Console;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebSettings.RenderPriority;

import org.apache.cordova.*;

public class GeoKulTur extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        
        //super.appView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        //super.getSettings().setRenderPriority(RenderPriority.HIGH);
        //webview.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);

        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")

        try {
        	super.appView.getSettings().setRenderPriority(RenderPriority.HIGH);
        } catch (Exception e) {
        	
        }
        try {
        	super.appView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        } catch (Exception e) {
        	
        }
    }
}

