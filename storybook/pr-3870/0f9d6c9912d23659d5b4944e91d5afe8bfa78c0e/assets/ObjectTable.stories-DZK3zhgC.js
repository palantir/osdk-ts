import{j as i}from"./iframe-BNOKRHpm.js";import{O as p}from"./object-table-DxskSANI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B0m1PSk_.js";import"./preload-helper-CFKbXbX-.js";import"./Table-CP40vGo6.js";import"./index-XA3M--in.js";import"./Dialog-VzJ2GhTk.js";import"./cross-C6ouYwXO.js";import"./svgIconContainer-DfI3Swo4.js";import"./useBaseUiId-CUrQf0BS.js";import"./InternalBackdrop-Ba206NVe.js";import"./composite-miZnHh1r.js";import"./index-BRkADXm4.js";import"./index-DRg9zoeK.js";import"./index-CbdrAR84.js";import"./useEventCallback-BJLSqFt5.js";import"./SkeletonBar-CJCawi6C.js";import"./LoadingCell-CfWkjve0.js";import"./ColumnConfigDialog-B4XsetrV.js";import"./DraggableList-DJyAsJHK.js";import"./search-Dgaav2uF.js";import"./Input-BgXBkyZH.js";import"./useControlled-CFad5hXR.js";import"./Button-BuIgOk8v.js";import"./small-cross-BFmen-Bm.js";import"./ActionButton-CgO8w1uL.js";import"./Checkbox-tApvN24W.js";import"./useValueChanged-BwGMDP-K.js";import"./CollapsiblePanel-DOor5ooD.js";import"./MultiColumnSortDialog-B4nfMeQm.js";import"./MenuTrigger-G5dTVs-D.js";import"./CompositeItem-BXx4pExx.js";import"./ToolbarRootContext-B2tiH_2Q.js";import"./getDisabledMountTransitionStyles-WnO-c-MQ.js";import"./getPseudoElementBounds-C64LTfyN.js";import"./chevron-down-BEJwekoL.js";import"./index--hzNwQqO.js";import"./error-BlVam3Jf.js";import"./BaseCbacBanner-BCfdVX3j.js";import"./makeExternalStore-DzLhNxCL.js";import"./Tooltip-CY2sOn3Y.js";import"./PopoverPopup-CwX1wf7p.js";import"./debounce-sLe2cVh8.js";import"./useOsdkClient-CvNBJB2G.js";import"./tick-ck2iZb7i.js";import"./DropdownField-BXHMhMxP.js";import"./isEqual-BA4SbdaQ.js";import"./withOsdkMetrics-Bvubum1o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
