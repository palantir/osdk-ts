import{j as i}from"./iframe-Ct_LTQ93.js";import{O as p}from"./object-table-BjpLJk-N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Diz2bEyx.js";import"./preload-helper-DHNJcgM4.js";import"./Table-BUnG-MNj.js";import"./index-CjWY7hqr.js";import"./Dialog-CEaWvMaV.js";import"./cross-BMcPCyGb.js";import"./svgIconContainer-D_GmqO65.js";import"./useBaseUiId-BDRI1jLy.js";import"./InternalBackdrop-BSWQCnA5.js";import"./composite-APUMWHCt.js";import"./index-mm_jw7Xo.js";import"./index-9R-_TKRE.js";import"./index-kI2DKCg6.js";import"./useEventCallback-C35WzWzm.js";import"./SkeletonBar-CP1CBn37.js";import"./LoadingCell-BKc_rCRP.js";import"./ColumnConfigDialog-DQiVRSY-.js";import"./DraggableList-BaNTueOA.js";import"./search-CNF4ePSc.js";import"./Input-BZ7vEK6X.js";import"./useControlled-BcWumCfO.js";import"./Button-BbozFPaz.js";import"./small-cross-C7igDgRw.js";import"./ActionButton-B0vdmru0.js";import"./Checkbox-Da4cP95T.js";import"./useValueChanged-DSn7N3P8.js";import"./CollapsiblePanel-CDP6sO-o.js";import"./MultiColumnSortDialog-nOaBMayw.js";import"./MenuTrigger-BGg02pB-.js";import"./CompositeItem-BWQS8Cwe.js";import"./ToolbarRootContext-CUntK8-H.js";import"./getDisabledMountTransitionStyles-lPIcIbkl.js";import"./getPseudoElementBounds-gA8sF9Xl.js";import"./chevron-down-BRMAFES-.js";import"./index-BEQyGiD3.js";import"./error-BEzuwBxE.js";import"./BaseCbacBanner-CPqW-ZZQ.js";import"./makeExternalStore-DCOlRUS1.js";import"./Tooltip-CI3Mtqz5.js";import"./PopoverPopup-C5_b-GPn.js";import"./debounce-CqGuf8Za.js";import"./useOsdkClient-D0JiDnls.js";import"./tick-CV01Z0Xq.js";import"./DropdownField-CvbC-XSP.js";import"./isEqual-Bk4NXlAm.js";import"./withOsdkMetrics-BxODEj1w.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
