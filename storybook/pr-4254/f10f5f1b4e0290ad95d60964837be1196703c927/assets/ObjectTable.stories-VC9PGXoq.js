import{j as i}from"./iframe-DsRLlUaX.js";import{O as p}from"./object-table-C6ocuAmU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CUcvYOeI.js";import"./preload-helper-C3_l2Hl0.js";import"./Table-B5YW4b-i.js";import"./index-BjtlPBUb.js";import"./Dialog-NmSshLSo.js";import"./cross-BZKb8UMR.js";import"./svgIconContainer-zp1B85KB.js";import"./useBaseUiId-C4i6MKWL.js";import"./InternalBackdrop-nEq0F95e.js";import"./composite-DOMJJy3E.js";import"./index-n_UhMgqI.js";import"./index-Bav5EGdy.js";import"./index-BzAzXXv_.js";import"./useEventCallback-DmbMgs2A.js";import"./SkeletonBar-RdAIK3SY.js";import"./LoadingCell-CxPz7u6p.js";import"./ColumnConfigDialog-BIlxFV8w.js";import"./DraggableList-CQ2CxVlc.js";import"./search-SgUD_ncl.js";import"./Input-DZ_xmuAk.js";import"./useControlled-DEedTOrX.js";import"./Button-DOnuCfPD.js";import"./small-cross-CPUMrn4k.js";import"./ActionButton-DcRLI80N.js";import"./Checkbox-Anj4p3QX.js";import"./useValueChanged-C110ouPx.js";import"./CollapsiblePanel-Cs4tbvDj.js";import"./MultiColumnSortDialog-DlgXXTmU.js";import"./MenuTrigger-FQSVvGxv.js";import"./CompositeItem-DfeVObqB.js";import"./ToolbarRootContext-B0k-j8eq.js";import"./getDisabledMountTransitionStyles-CuDFXdCB.js";import"./getPseudoElementBounds-BKZ8iNlw.js";import"./chevron-down-BpedfE0t.js";import"./index-C9cwWX6g.js";import"./error-CaruzJxR.js";import"./BaseCbacBanner-JMChXCpR.js";import"./makeExternalStore-0t40E2-H.js";import"./Tooltip-Bb-4nM7_.js";import"./PopoverPopup-C20EJZAo.js";import"./debounce-BdN6OVW0.js";import"./useOsdkClient-odhqC5VJ.js";import"./tick-Bf8GrdTl.js";import"./DropdownField-B8gE2PDv.js";import"./isEqual-Caes_N__.js";import"./withOsdkMetrics-BDhrFxgU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
