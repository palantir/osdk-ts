import{j as i}from"./iframe-mxG0bqmN.js";import{O as p}from"./object-table-WFIM5xuM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9__xSIXK.js";import"./preload-helper-CNw17NEq.js";import"./Table-CAKdzfmG.js";import"./index-29oGgzLZ.js";import"./Dialog-CzGl0n2S.js";import"./cross-D6Tl4R1E.js";import"./svgIconContainer-rUf9sgj2.js";import"./useBaseUiId-B0pa-b1P.js";import"./InternalBackdrop-CGuoD2YW.js";import"./composite-CT4w3sd4.js";import"./index-LiG5jLj1.js";import"./index-xs8nS-0V.js";import"./index-CxXsu0GI.js";import"./useEventCallback-L-Hi9oaa.js";import"./SkeletonBar-BCvv_Y3s.js";import"./LoadingCell-wIgPXJ0i.js";import"./ColumnConfigDialog-BW87yl2t.js";import"./DraggableList-BhkR4Rp6.js";import"./search-D0vl5yax.js";import"./Input-DAYbAIy1.js";import"./useControlled-CwpY0gyY.js";import"./Button-CoXV5wZD.js";import"./small-cross-B4Qofj2m.js";import"./ActionButton-Cf-j963P.js";import"./Checkbox-8pM9UbcC.js";import"./useValueChanged-pIGQFkB0.js";import"./CollapsiblePanel-BCX6O8yN.js";import"./MultiColumnSortDialog-C30X4qHV.js";import"./MenuTrigger-CUh0N47S.js";import"./CompositeItem-CqN63eX8.js";import"./ToolbarRootContext-fx2tIRtZ.js";import"./getDisabledMountTransitionStyles-9AH5tTIW.js";import"./getPseudoElementBounds-Bb4Xtmeq.js";import"./chevron-down-BPLfSvEY.js";import"./index-yPM4gYG7.js";import"./error-C0pmiaE9.js";import"./BaseCbacBanner-CesOwNkt.js";import"./makeExternalStore-DsBTIsva.js";import"./Tooltip-z0kTVIGb.js";import"./PopoverPopup-Cs7h6BtC.js";import"./debounce-CTavI0VY.js";import"./useOsdkClient-D60YQHAg.js";import"./tick-jAHr_TTi.js";import"./DropdownField-DDaAL4R3.js";import"./isEqual-C7XaR8KZ.js";import"./withOsdkMetrics-BccI-HLw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
