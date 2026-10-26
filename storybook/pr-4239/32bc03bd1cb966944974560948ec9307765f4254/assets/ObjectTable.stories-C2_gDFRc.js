import{j as i}from"./iframe-DexdKsaQ.js";import{O as p}from"./object-table--Xzz2q6z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DV5JVy0O.js";import"./preload-helper-C3HMhfxy.js";import"./Table-0uxJVwjw.js";import"./index-CbLEfBq5.js";import"./Dialog-Bl_IB0gG.js";import"./cross-D_rqjJ8K.js";import"./svgIconContainer-BRMcYWO4.js";import"./useBaseUiId-sMlbFyJU.js";import"./InternalBackdrop-AGxJgsS7.js";import"./composite-BciPM06w.js";import"./index-BqerP4CK.js";import"./index-__d1p36X.js";import"./index-DRMwbFJm.js";import"./useEventCallback-00FuE3yt.js";import"./SkeletonBar-CTo2vf2l.js";import"./LoadingCell-QVcjovzl.js";import"./ColumnConfigDialog-8H_Huj5j.js";import"./DraggableList-IrB-ONqE.js";import"./search-DTk97rWq.js";import"./Input-BuDuHwVf.js";import"./useControlled-DJ_HdD9M.js";import"./Button-Cpyi3piv.js";import"./small-cross-CDaXIpxf.js";import"./ActionButton-5jPmd7jR.js";import"./Checkbox-Cs-cCTFT.js";import"./useValueChanged-CrQ7wcWr.js";import"./CollapsiblePanel-gO76M-DU.js";import"./MultiColumnSortDialog-a4DIDRAh.js";import"./MenuTrigger-DC413XLI.js";import"./CompositeItem-UFfjwpOD.js";import"./ToolbarRootContext-B4sm5nDg.js";import"./getDisabledMountTransitionStyles-ux2ze1bo.js";import"./getPseudoElementBounds-B3DGHAsz.js";import"./chevron-down-CPG2b4DG.js";import"./index-DEkTB2Ut.js";import"./error-mWFE-E3g.js";import"./BaseCbacBanner-B0Bpjetm.js";import"./makeExternalStore-CGnJLW95.js";import"./Tooltip-CXPRVM-4.js";import"./PopoverPopup-Bl0JUMbC.js";import"./debounce-B6TRsFCS.js";import"./useOsdkClient-mkKseWzk.js";import"./tick-D75lzxtW.js";import"./DropdownField-BSrXQuo_.js";import"./isEqual-BYVoFHZi.js";import"./withOsdkMetrics-DPD_IOvo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
