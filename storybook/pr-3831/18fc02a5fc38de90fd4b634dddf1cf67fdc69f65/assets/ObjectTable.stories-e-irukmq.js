import{j as i}from"./iframe-B4UcJlUn.js";import{O as p}from"./object-table-DiwpuMil.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1ctBV-O.js";import"./preload-helper-nCBdWicC.js";import"./Table-BHvLJsK4.js";import"./index-C8ef4t-Z.js";import"./Dialog-XW8pn7Pw.js";import"./cross-CDlzpv2a.js";import"./svgIconContainer-jV7YtvQC.js";import"./useBaseUiId-B5hZssna.js";import"./InternalBackdrop-Dv95WM47.js";import"./composite-C7ayO821.js";import"./index-9mx_yRh-.js";import"./index-B9KiQzXE.js";import"./index-Bxf9gMnl.js";import"./useEventCallback-Bg9KxLqK.js";import"./SkeletonBar-PtnMdiMD.js";import"./LoadingCell-CTHifDQa.js";import"./ColumnConfigDialog-BWIdVMWN.js";import"./DraggableList-DuKXnODV.js";import"./search-BUVwFVg8.js";import"./Input-eMNIp8tt.js";import"./useControlled-Bi9AY8b2.js";import"./isEqual-DxmTL_oR.js";import"./isObject-Dxu5HMS6.js";import"./Button-BadEAtWa.js";import"./ActionButton-D-tAnNy-.js";import"./Checkbox-BkS2Qobf.js";import"./useValueChanged-DNJ0cUmN.js";import"./CollapsiblePanel-uwjXlVCK.js";import"./MultiColumnSortDialog-CwZaJqvE.js";import"./MenuTrigger-Ck3CLacH.js";import"./CompositeItem-BH6AHNlU.js";import"./ToolbarRootContext-Dvnv9LkO.js";import"./getDisabledMountTransitionStyles-CZklATkN.js";import"./getPseudoElementBounds-CCO8HMN-.js";import"./chevron-down-CeZmVDL8.js";import"./index-CJtYrTIY.js";import"./error-CwHD_sRR.js";import"./BaseCbacBanner-B0N7992P.js";import"./makeExternalStore-CeFMygCV.js";import"./Tooltip-CsX77x6k.js";import"./PopoverPopup-kRZzR8O8.js";import"./toNumber-BnE3Hbyw.js";import"./useOsdkClient-T3cVOfDt.js";import"./tick-BOWGCcMw.js";import"./DropdownField-BimjaBga.js";import"./withOsdkMetrics-BsIweO9h.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
