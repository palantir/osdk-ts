import{j as i}from"./iframe-7DO_hgMQ.js";import{O as p}from"./object-table-DzRSMbhZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-pfkkWBec.js";import"./preload-helper-B5hnoC7R.js";import"./Table-Cs3qJJzJ.js";import"./index-C29pOm1T.js";import"./Dialog-33AZHfcx.js";import"./cross-D_9OLgop.js";import"./svgIconContainer-DzpdNPkA.js";import"./useBaseUiId-Oq1MgnVD.js";import"./InternalBackdrop-Dl6a1-jN.js";import"./composite-BIyzFJw4.js";import"./index-CpBs9sRH.js";import"./index-kxscKf13.js";import"./index-B0-vcEDH.js";import"./useEventCallback-DxKGXWo7.js";import"./SkeletonBar-Dtl4JXfg.js";import"./LoadingCell-CSOm7JED.js";import"./ColumnConfigDialog-GUNvAyiE.js";import"./DraggableList-BCoI0rXg.js";import"./search-BiYpAlM6.js";import"./Input-BSSTxlm0.js";import"./useControlled-C5lH_kP3.js";import"./Button-CG_O6ptK.js";import"./small-cross-CU3PqcXv.js";import"./ActionButton-mzmJtNoX.js";import"./Checkbox-EtAi-RKo.js";import"./useValueChanged-DqawIZVU.js";import"./CollapsiblePanel-Bp7Wi5LO.js";import"./MultiColumnSortDialog-t6Q-Jcrf.js";import"./MenuTrigger-D9AV9YJR.js";import"./CompositeItem-CRzuvZSB.js";import"./ToolbarRootContext-D-ECRYtl.js";import"./getDisabledMountTransitionStyles-DSUse_yu.js";import"./getPseudoElementBounds-CjuU1qh7.js";import"./chevron-down-Cv_rBr5Q.js";import"./index-DAoZpWAc.js";import"./error-CYThlbbP.js";import"./BaseCbacBanner-D0oQx4Si.js";import"./makeExternalStore-C0_o8WAL.js";import"./Tooltip-DvjdNXO5.js";import"./PopoverPopup-OXRN3eBM.js";import"./debounce-fWQ1Uyi8.js";import"./useOsdkClient-CzqB3KxT.js";import"./tick-CX03s7uJ.js";import"./DropdownField-DfRF7x4Q.js";import"./isEqual-C20Mk7vo.js";import"./withOsdkMetrics-BBFkx9l4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
