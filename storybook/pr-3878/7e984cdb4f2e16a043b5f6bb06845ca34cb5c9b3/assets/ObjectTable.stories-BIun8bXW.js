import{j as i}from"./iframe-D_l2u6_6.js";import{O as p}from"./object-table-D1XKD5VY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-uBqOom6K.js";import"./preload-helper-DpjmzVUp.js";import"./Table-fHmfLZAd.js";import"./index-Dh9XtuqD.js";import"./Dialog-ddbwFZ6h.js";import"./cross-gGpYcHa9.js";import"./svgIconContainer-5I5uI1yB.js";import"./useBaseUiId-CXCcQdyU.js";import"./InternalBackdrop-D_4E-Rxz.js";import"./composite-BhVnd5Ck.js";import"./index-DfO4jocZ.js";import"./index-CiyIlioJ.js";import"./index-DfCuXz0x.js";import"./useEventCallback-BgdlLsMa.js";import"./SkeletonBar-DlE-3K9g.js";import"./LoadingCell-C6vkENzn.js";import"./ColumnConfigDialog-D-SC4cU5.js";import"./DraggableList-DSDUX4s7.js";import"./search-CpZeqKUE.js";import"./Input-C-nLgfsl.js";import"./useControlled-BDw-HKbZ.js";import"./Button-CKuTj87a.js";import"./small-cross-C9PjvE4A.js";import"./ActionButton-BXiWW4vN.js";import"./Checkbox-DLVgl3J5.js";import"./useValueChanged-BH7Mlnbx.js";import"./CollapsiblePanel-C_xwzt2e.js";import"./MultiColumnSortDialog-DwXONmuL.js";import"./MenuTrigger-BPfbcpen.js";import"./CompositeItem-iF4WWV8_.js";import"./ToolbarRootContext-C1XZ50ky.js";import"./getDisabledMountTransitionStyles-x-mkt6n1.js";import"./getPseudoElementBounds-dXr3viq6.js";import"./chevron-down-CrG8bbfA.js";import"./index-DidMIQP-.js";import"./error-BMvuJzzL.js";import"./BaseCbacBanner-B6SfVemQ.js";import"./makeExternalStore-BcUYV5GH.js";import"./Tooltip-CT3gDVtv.js";import"./PopoverPopup-CJl6zO3k.js";import"./debounce-CDPBmaYV.js";import"./useOsdkClient-Tzqd6rMR.js";import"./tick-CrfOW8ie.js";import"./DropdownField-BXaP58OO.js";import"./isEqual-CsFmxKDR.js";import"./withOsdkMetrics-BJ3LCUHt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
