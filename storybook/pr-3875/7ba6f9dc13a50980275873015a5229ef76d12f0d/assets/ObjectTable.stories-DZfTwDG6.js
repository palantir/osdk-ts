import{j as i}from"./iframe-pVpd-5Fd.js";import{O as p}from"./object-table-DBuGlqDB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BcL5LCAG.js";import"./preload-helper-CWKX588j.js";import"./Table-DeiMW-lF.js";import"./index-BqhgvWoK.js";import"./Dialog-8YRFr7OJ.js";import"./cross-DkYiF8wc.js";import"./svgIconContainer-CaaU9NHC.js";import"./useBaseUiId-E_3kyUVy.js";import"./InternalBackdrop-CuB13asz.js";import"./composite-CwUrmrWF.js";import"./index-CylWHs1O.js";import"./index-DjcUw-9V.js";import"./index-_sEyGhur.js";import"./useEventCallback-I-tUTcsl.js";import"./SkeletonBar-fqFf26LV.js";import"./LoadingCell-QsH4Xk2V.js";import"./ColumnConfigDialog-DeF6XPZf.js";import"./DraggableList-BarxrkZJ.js";import"./search-Jf5xJ1D9.js";import"./Input-B4fGMfLL.js";import"./useControlled-8FvqARU6.js";import"./Button-DFmHXmt2.js";import"./small-cross-BWXxQMU0.js";import"./ActionButton-BSN0F72E.js";import"./Checkbox-C2RkinkT.js";import"./useValueChanged-DRe_GwRO.js";import"./CollapsiblePanel-DfsulYic.js";import"./MultiColumnSortDialog-DV_z7XN8.js";import"./MenuTrigger-OHtQAx24.js";import"./CompositeItem-BQXuUE1x.js";import"./ToolbarRootContext-CZHUcEVu.js";import"./getDisabledMountTransitionStyles-BWUw-zGn.js";import"./getPseudoElementBounds-_nxJt77q.js";import"./chevron-down-DYz5-Z2v.js";import"./index-BCDVMhSh.js";import"./error-CBBs5I85.js";import"./BaseCbacBanner-C22pQH-A.js";import"./makeExternalStore-v2dcTeAE.js";import"./Tooltip-Dq1rO_gI.js";import"./PopoverPopup-Bg6-zD8h.js";import"./debounce-f-iGekXc.js";import"./useOsdkClient-jlR6Pe0H.js";import"./tick-Cc5XUbJN.js";import"./DropdownField-Bb6YSXO8.js";import"./isEqual-C07f0oe6.js";import"./withOsdkMetrics-DrmtF7vj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
