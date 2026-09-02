import{j as i}from"./iframe-BtTN4BQB.js";import{O as p}from"./object-table-Bvx4yqVd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCda7qvA.js";import"./preload-helper-C2hFUd6N.js";import"./Table-CoZReMex.js";import"./index-pxWT2dwl.js";import"./Dialog--QRamm7H.js";import"./cross-q76qzbb-.js";import"./svgIconContainer-Ck-gVtGn.js";import"./useBaseUiId-lIY47ohq.js";import"./InternalBackdrop-dYX83tvG.js";import"./composite-CdDRlQtM.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./index-DOgMvsUP.js";import"./useEventCallback-BtkhBx2l.js";import"./SkeletonBar-BEHzB_kl.js";import"./LoadingCell-CAz1hfsM.js";import"./ColumnConfigDialog-BoZUi2Vu.js";import"./DraggableList-BNYdNfbR.js";import"./search-B3tYggTx.js";import"./Input-BP96gLBp.js";import"./useControlled-BY2aVBy7.js";import"./Button-BLq1-le0.js";import"./small-cross-C5ga7063.js";import"./ActionButton-CM0ktcvu.js";import"./Checkbox-B1ajB8tt.js";import"./useValueChanged-fmp-pLJF.js";import"./CollapsiblePanel-hvpVpf_T.js";import"./MultiColumnSortDialog-DQ99MgP8.js";import"./MenuTrigger-Diwu4kws.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./getDisabledMountTransitionStyles-CN6FaNLi.js";import"./getPseudoElementBounds-8uy80WiE.js";import"./chevron-down-BcmFYUSl.js";import"./index-9u2i6wOA.js";import"./error-eGAnK2yX.js";import"./BaseCbacBanner-eiRHuLLT.js";import"./makeExternalStore-Djs-AWxx.js";import"./Tooltip-H3WuRadb.js";import"./PopoverPopup-DWl2W-_4.js";import"./debounce-BHOQ-Rki.js";import"./useOsdkClient-DEjT27KS.js";import"./tick-DcJBbOnL.js";import"./DropdownField-BLdkGkAU.js";import"./isEqual-CIlWL9cG.js";import"./withOsdkMetrics-DMwNEK1o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
