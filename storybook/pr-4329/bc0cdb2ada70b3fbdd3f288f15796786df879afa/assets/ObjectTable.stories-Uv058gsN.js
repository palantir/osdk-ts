import{j as i}from"./iframe-D9LEKPHA.js";import{O as p}from"./object-table-B1AfggZM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zkhyuCkI.js";import"./preload-helper-Dxzd1OZD.js";import"./Table-DXZyWBeX.js";import"./index-DzK_y6C8.js";import"./Dialog-CWnr_w5m.js";import"./cross-C3SLdrCX.js";import"./svgIconContainer-e-ufemnI.js";import"./useBaseUiId-CBbaApFb.js";import"./InternalBackdrop-GJoSUQP4.js";import"./composite-CGRnG1Ww.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./index-DsxzOZNt.js";import"./useEventCallback-DDtAALNo.js";import"./SkeletonBar-Dyau828r.js";import"./LoadingCell-CAS6H_28.js";import"./ColumnConfigDialog-A5yV7I5q.js";import"./DraggableList-a_S_NMQt.js";import"./search-CA19qJZK.js";import"./Input-D7T3_Ui_.js";import"./useControlled-3uaONOlZ.js";import"./Button-CFsy2fIN.js";import"./small-cross-suCAhOQB.js";import"./ActionButton-Bf8hi2D9.js";import"./Checkbox-k2zGxl_k.js";import"./useValueChanged-CGf07a8j.js";import"./CollapsiblePanel-D4Wj2a6a.js";import"./MultiColumnSortDialog-DkEgg_lY.js";import"./MenuTrigger-hlDUsPJn.js";import"./CompositeItem-C_PTfcmx.js";import"./ToolbarRootContext-CATQRVeE.js";import"./getDisabledMountTransitionStyles-CBkqgZFm.js";import"./getPseudoElementBounds-BqSDvjTD.js";import"./chevron-down-5k8pvBL_.js";import"./index-vYt4oG90.js";import"./error-CuQM1-tZ.js";import"./BaseCbacBanner-BDhY3mYb.js";import"./makeExternalStore-CH14MzlW.js";import"./Tooltip-BTJQl-Kl.js";import"./isObject-D93Vzkd_.js";import"./debounce-BbpvLq-c.js";import"./useOsdkClient-CcWL-FKN.js";import"./tick-CbRcQjZj.js";import"./DropdownField-BGcI4SWd.js";import"./isEqual-CFExKmCm.js";import"./_baseIsEqual-O2ApXnqd.js";import"./withOsdkMetrics-CQaJkAGj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
