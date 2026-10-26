import{j as i}from"./iframe-ChS3imFp.js";import{O as p}from"./object-table-BPYfgJHo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-JEpf_mK9.js";import"./preload-helper-CbLZMJZq.js";import"./Table-1iNzrKdw.js";import"./index-BhUaDBrt.js";import"./Dialog-CNUb0HiZ.js";import"./cross-B14JKiqa.js";import"./svgIconContainer-CrPK_Tf2.js";import"./useBaseUiId-D54mwsVu.js";import"./InternalBackdrop-BxgcnVtt.js";import"./composite-BXiRclhX.js";import"./index-q2j62sEE.js";import"./index-jVTOKRrt.js";import"./index-C5fCn2Oc.js";import"./useEventCallback-DkRfzjT3.js";import"./SkeletonBar-Cj6_TZPS.js";import"./LoadingCell-Bvndp_nD.js";import"./ColumnConfigDialog-6QS0FE1C.js";import"./DraggableList-4xfXmqhr.js";import"./search-DsoYH40Z.js";import"./Input-Ceo2lduN.js";import"./useControlled-BRbOyxdk.js";import"./Button-DheVbQ5T.js";import"./small-cross-BvcSZeK5.js";import"./ActionButton-5Bimgsql.js";import"./Checkbox-BeMf2eoX.js";import"./useValueChanged-BrvbqScR.js";import"./CollapsiblePanel-6nrQcjmf.js";import"./MultiColumnSortDialog-CRuuO82b.js";import"./MenuTrigger-C8EJ5VzV.js";import"./CompositeItem-Ciy3kTde.js";import"./ToolbarRootContext-Ciy-U0ts.js";import"./getDisabledMountTransitionStyles-CDYtl7Ns.js";import"./getPseudoElementBounds-j94sMqWn.js";import"./chevron-down-CE8oNUyN.js";import"./index-x3Y6GJ5x.js";import"./error-qSLqjDm7.js";import"./BaseCbacBanner-Ddq1Akzn.js";import"./makeExternalStore-vRVo58Vz.js";import"./Tooltip-Dttn_b8B.js";import"./PopoverPopup-C3wuDmxN.js";import"./debounce-DDb-9VWg.js";import"./useOsdkClient-DGx74XLA.js";import"./tick-X11Khcsu.js";import"./DropdownField-DH0EEhyZ.js";import"./isEqual-CJd-aWLn.js";import"./withOsdkMetrics-uF3PiR7H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
