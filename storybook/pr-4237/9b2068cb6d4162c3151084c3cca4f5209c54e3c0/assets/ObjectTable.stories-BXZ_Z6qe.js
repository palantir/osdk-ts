import{j as i}from"./iframe-Cc5_drEC.js";import{O as p}from"./object-table-P_Tf1Dfl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bd1-skWr.js";import"./preload-helper-Bt1W59RD.js";import"./Table-DeQbLK8q.js";import"./index-D-UZOeKX.js";import"./Dialog-C1aseqgF.js";import"./cross-CJA5t11o.js";import"./svgIconContainer-DUNbWJiK.js";import"./useBaseUiId-DZZTvEON.js";import"./InternalBackdrop-00ofXWi4.js";import"./composite-DTAuCieW.js";import"./index-IxLV6xZ7.js";import"./index-fYCa685o.js";import"./index-DLbXZ__j.js";import"./useEventCallback-Nwtw5ePR.js";import"./SkeletonBar-DdEJM8wE.js";import"./LoadingCell-C5h29HP8.js";import"./ColumnConfigDialog-TW1lwUkG.js";import"./DraggableList-BzFzeCoL.js";import"./search-C_Y495lk.js";import"./Input-BXNkfVg0.js";import"./useControlled-DzeayCVC.js";import"./Button-CLepS3ZY.js";import"./small-cross-ChmHXfGU.js";import"./ActionButton-w_opMWjJ.js";import"./Checkbox-DKu8ib_9.js";import"./useValueChanged-C8wUi11i.js";import"./CollapsiblePanel-CxbXkZUA.js";import"./MultiColumnSortDialog-CM1JEO4R.js";import"./MenuTrigger-BqkP-pKp.js";import"./CompositeItem-Zf76mXhE.js";import"./ToolbarRootContext-B17vRDJw.js";import"./getDisabledMountTransitionStyles-CWBpGJQ9.js";import"./getPseudoElementBounds-BgIULFkV.js";import"./chevron-down-DaAY8kxc.js";import"./index-DpTIc79B.js";import"./error-CgtKdKTE.js";import"./BaseCbacBanner-CtMCVqmc.js";import"./makeExternalStore-8Ml87JDf.js";import"./Tooltip-DLAYmbQY.js";import"./PopoverPopup-NaPF7hSd.js";import"./debounce-DfK46y7C.js";import"./useOsdkClient-C_6tjczz.js";import"./tick-CMjsKL7k.js";import"./DropdownField-DP_8eQpa.js";import"./isEqual-DuFq13IR.js";import"./withOsdkMetrics-uMhaipzm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
