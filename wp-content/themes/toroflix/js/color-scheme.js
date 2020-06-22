/* global colorScheme, Color */
/**
 * Add a listener to the Color Scheme control to update other color controls to new values/defaults.
 * Also trigger an update of the Color Scheme CSS when a color is changed.
 */

( function( api ) {
	var cssTemplate = wp.template( 'tp-color-scheme' ),
		colorSchemeKeys = [
        'tp_color_1',
        'tp_color_2',
        'tp_color_3',
        'tp_color_4',
        'tp_color_5',
        'tp_color_6',
        'tp_color_7',
        'tp_color_8',
        'tp_color_9',
        'tp_color_10',
        'tp_color_11',
        'tp_color_12',
        'tp_color_13',
        'tp_color_14',
        'tp_color_15',
        'tp_color_16',
        'tp_color_17',
        'tp_color_18',
        'tp_color_19',
        'tp_color_20',
        'tp_color_21',
        'tp_color_22',
        'tp_color_23',
        'tp_color_24',
        'tp_color_25',
        'tp_color_26',
        'tp_color_27',
        'tp_color_28',
        'tp_color_29',
        'tp_color_30',
        'tp_color_31',
        'tp_color_32',
        'tp_color_33',
        'tp_color_34',
        'tp_color_35',
        'tp_color_36',
        'tp_color_37',
        'tp_color_38',
        'tp_color_39',
        'tp_color_40',
        'tp_color_41',
        'tp_color_42',
        'tp_color_43',
        'tp_color_44',
        'tp_color_45',
        'tp_color_46',
        'tp_color_47',
        'tp_color_48',
		],
		colorSettings = [
        'tp_color_1',
        'tp_color_2',
        'tp_color_3',
        'tp_color_4',
        'tp_color_5',
        'tp_color_6',
        'tp_color_7',
        'tp_color_8',
        'tp_color_9',
        'tp_color_10',
        'tp_color_11',
        'tp_color_12',
        'tp_color_13',
        'tp_color_14',
        'tp_color_15',
        'tp_color_16',
        'tp_color_17',
        'tp_color_18',
        'tp_color_19',
        'tp_color_20',
        'tp_color_21',
        'tp_color_22',
        'tp_color_23',
        'tp_color_24',
        'tp_color_25',
        'tp_color_26',
        'tp_color_27',
        'tp_color_28',
        'tp_color_29',
        'tp_color_30',
        'tp_color_31',
        'tp_color_32',
        'tp_color_33',
        'tp_color_34',
        'tp_color_35',
        'tp_color_36',
        'tp_color_37',
        'tp_color_38',
        'tp_color_39',
        'tp_color_40',
        'tp_color_41',
        'tp_color_42',
        'tp_color_43',
        'tp_color_44',
        'tp_color_45',
        'tp_color_46',
        'tp_color_47',
        'tp_color_48',
		];

	api.controlConstructor.select = api.Control.extend( {
		ready: function() {
			if ( 'color_scheme' === this.id ) {
				this.setting.bind( 'change', function( value ) {
                    
					api( 'tp_color_1' ).set( tpColorScheme[value].colors[0] );
					api.control( 'tp_color_1' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[0] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[0] );

                        
                        					api( 'tp_color_2' ).set( tpColorScheme[value].colors[1] );
					api.control( 'tp_color_2' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[1] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[1] );

                        
                        					api( 'tp_color_3' ).set( tpColorScheme[value].colors[2] );
					api.control( 'tp_color_3' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[2] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[2] );

                        
                        					api( 'tp_color_4' ).set( tpColorScheme[value].colors[3] );
					api.control( 'tp_color_4' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[3] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[3] );

                        
                        					api( 'tp_color_5' ).set( tpColorScheme[value].colors[4] );
					api.control( 'tp_color_5' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[4] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[4] );

                        
                        					api( 'tp_color_6' ).set( tpColorScheme[value].colors[5] );
					api.control( 'tp_color_6' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[5] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[5] );

                        
                        					api( 'tp_color_7' ).set( tpColorScheme[value].colors[6] );
					api.control( 'tp_color_7' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[6] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[6] );

                        
                        					api( 'tp_color_8' ).set( tpColorScheme[value].colors[7] );
					api.control( 'tp_color_8' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[7] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[7] );

                        
                        					api( 'tp_color_9' ).set( tpColorScheme[value].colors[8] );
					api.control( 'tp_color_9' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[8] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[8] );

                        
                        					api( 'tp_color_10' ).set( tpColorScheme[value].colors[9] );
					api.control( 'tp_color_10' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[9] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[9] );

                        
                        					api( 'tp_color_11' ).set( tpColorScheme[value].colors[10] );
					api.control( 'tp_color_11' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[10] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[10] );

                        
                        					api( 'tp_color_12' ).set( tpColorScheme[value].colors[11] );
					api.control( 'tp_color_12' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[11] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[11] );

                        
                        					api( 'tp_color_13' ).set( tpColorScheme[value].colors[12] );
					api.control( 'tp_color_13' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[12] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[12] );

                        
                        					api( 'tp_color_14' ).set( tpColorScheme[value].colors[13] );
					api.control( 'tp_color_14' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[13] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[13] );

                        
                        					api( 'tp_color_15' ).set( tpColorScheme[value].colors[14] );
					api.control( 'tp_color_15' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[14] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[14] );

                        
                        					api( 'tp_color_16' ).set( tpColorScheme[value].colors[15] );
					api.control( 'tp_color_16' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[15] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[15] );

                        
                        					api( 'tp_color_17' ).set( tpColorScheme[value].colors[16] );
					api.control( 'tp_color_17' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[16] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[16] );

                        
                        					api( 'tp_color_18' ).set( tpColorScheme[value].colors[17] );
					api.control( 'tp_color_18' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[17] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[17] );

                        
                        					api( 'tp_color_19' ).set( tpColorScheme[value].colors[18] );
					api.control( 'tp_color_19' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[18] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[18] );

                        
                        					api( 'tp_color_20' ).set( tpColorScheme[value].colors[19] );
					api.control( 'tp_color_20' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[19] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[19] );

                        
                        					api( 'tp_color_21' ).set( tpColorScheme[value].colors[20] );
					api.control( 'tp_color_21' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[20] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[20] );

                        
                        					api( 'tp_color_22' ).set( tpColorScheme[value].colors[21] );
					api.control( 'tp_color_22' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[21] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[21] );

                        
                        					api( 'tp_color_23' ).set( tpColorScheme[value].colors[22] );
					api.control( 'tp_color_23' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[22] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[22] );

                        
                        					api( 'tp_color_24' ).set( tpColorScheme[value].colors[23] );
					api.control( 'tp_color_24' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[23] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[23] );

                        
                        					api( 'tp_color_25' ).set( tpColorScheme[value].colors[24] );
					api.control( 'tp_color_25' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[24] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[24] );

                        
                        					api( 'tp_color_26' ).set( tpColorScheme[value].colors[25] );
					api.control( 'tp_color_26' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[25] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[25] );

                        
                        					api( 'tp_color_27' ).set( tpColorScheme[value].colors[26] );
					api.control( 'tp_color_27' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[26] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[26] );

                        
                        					api( 'tp_color_28' ).set( tpColorScheme[value].colors[27] );
					api.control( 'tp_color_28' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[27] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[27] );

                        
                        					api( 'tp_color_29' ).set( tpColorScheme[value].colors[28] );
					api.control( 'tp_color_29' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[28] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[28] );

                        
                        					api( 'tp_color_30' ).set( tpColorScheme[value].colors[29] );
					api.control( 'tp_color_30' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[29] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[29] );

                        
                        					api( 'tp_color_31' ).set( tpColorScheme[value].colors[30] );
					api.control( 'tp_color_31' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[30] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[30] );

                        
                        					api( 'tp_color_32' ).set( tpColorScheme[value].colors[31] );
					api.control( 'tp_color_32' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[31] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[31] );

                        
                        					api( 'tp_color_33' ).set( tpColorScheme[value].colors[32] );
					api.control( 'tp_color_33' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[32] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[32] );

                        
                        					api( 'tp_color_34' ).set( tpColorScheme[value].colors[33] );
					api.control( 'tp_color_34' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[33] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[33] );

                        
                        					api( 'tp_color_35' ).set( tpColorScheme[value].colors[34] );
					api.control( 'tp_color_35' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[34] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[34] );

                        
                        					api( 'tp_color_36' ).set( tpColorScheme[value].colors[35] );
					api.control( 'tp_color_36' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[35] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[35] );

                        
                        					api( 'tp_color_37' ).set( tpColorScheme[value].colors[36] );
					api.control( 'tp_color_37' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[36] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[36] );

                        
                        					api( 'tp_color_38' ).set( tpColorScheme[value].colors[37] );
					api.control( 'tp_color_38' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[37] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[37] );

                        
                        					api( 'tp_color_39' ).set( tpColorScheme[value].colors[38] );
					api.control( 'tp_color_39' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[38] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[38] );

                        
                        					api( 'tp_color_40' ).set( tpColorScheme[value].colors[39] );
					api.control( 'tp_color_40' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[39] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[39] );

                        
                        					api( 'tp_color_41' ).set( tpColorScheme[value].colors[40] );
					api.control( 'tp_color_41' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[40] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[40] );

                        
                        					api( 'tp_color_42' ).set( tpColorScheme[value].colors[41] );
					api.control( 'tp_color_42' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[41] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[41] );

                        
                        					api( 'tp_color_43' ).set( tpColorScheme[value].colors[42] );
					api.control( 'tp_color_43' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[42] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[42] );

                        
                        					api( 'tp_color_44' ).set( tpColorScheme[value].colors[43] );
					api.control( 'tp_color_44' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[43] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[43] );

                        
                        					api( 'tp_color_45' ).set( tpColorScheme[value].colors[44] );
					api.control( 'tp_color_45' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[44] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[44] );

                        
                        					api( 'tp_color_46' ).set( tpColorScheme[value].colors[45] );
					api.control( 'tp_color_46' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[45] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[45] );

                        
                        					api( 'tp_color_47' ).set( tpColorScheme[value].colors[46] );
					api.control( 'tp_color_47' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[46] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[46] );

                        
                        					api( 'tp_color_48' ).set( tpColorScheme[value].colors[47] );
					api.control( 'tp_color_48' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', tpColorScheme[value].colors[47] )
						.wpColorPicker( 'defaultColor', tpColorScheme[value].colors[47] );
                    

				} );
			}
		}
        
        
	} );

	// Generate the CSS for the current Color Scheme.
	function updateCSS() {
		var scheme = api( 'color_scheme' )(), css,
			colors = _.object( colorSchemeKeys, tpColorScheme[ scheme ].colors );

		// Merge in color scheme overrides.
		_.each( colorSettings, function( setting ) {
			colors[ setting ] = api( setting )();
		});
        
        var trcolor_select = jQuery("select[data-customize-setting-link='color_scheme'] option:selected").val();
		
        css = cssTemplate( colors );

		api.previewer.send( 'update-color-scheme-css', css );
        
        
	}

	// Update the CSS whenever a color setting is changed.
    
	_.each( colorSettings, function( setting ) {
		api( setting, function( setting ) {
			setting.bind( updateCSS );
            
		} );
	} );
    
} )( wp.customize );