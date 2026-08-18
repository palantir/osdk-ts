import{j as i}from"./iframe-B3O9T_SG.js";import{O as p}from"./object-table-Cz6Ax0W-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZieZ8oP.js";import"./preload-helper-CPdbREwC.js";import"./Table-C-NLrUmP.js";import"./index-BwoUB_Qf.js";import"./Dialog-DyxMmZVC.js";import"./cross-Xt_GMyVs.js";import"./svgIconContainer-BPe5aJfR.js";import"./useBaseUiId-BICM1opj.js";import"./InternalBackdrop-BS30d1ux.js";import"./composite-D7y544dA.js";import"./index-CJOOs8zG.js";import"./index-QdBHREHi.js";import"./index-XMttNw81.js";import"./useEventCallback-DigiG9Xr.js";import"./SkeletonBar-uDL8CaFH.js";import"./LoadingCell-DcaOP2yK.js";import"./ColumnConfigDialog-DZPLl2H6.js";import"./DraggableList-BDMD6G6l.js";import"./search-Av7_nbfA.js";import"./Input-Dk0bR2r3.js";import"./useControlled-n7PhTfzO.js";import"./Button-DrW0QaFB.js";import"./small-cross-DK_4FkMK.js";import"./ActionButton-3prn6Dln.js";import"./Checkbox-C_OCS2UT.js";import"./useValueChanged-c0DtYdQL.js";import"./CollapsiblePanel-CM3enrfL.js";import"./MultiColumnSortDialog-BdgyQSSH.js";import"./MenuTrigger-iDnX6M_C.js";import"./CompositeItem-BqJr4Pc-.js";import"./ToolbarRootContext-CmKKFUT-.js";import"./getDisabledMountTransitionStyles-Cq0bqOj0.js";import"./getPseudoElementBounds-DVha8Hx2.js";import"./chevron-down-8HdkIbSK.js";import"./index-CwDIHAhZ.js";import"./error-B1lEKcyy.js";import"./BaseCbacBanner-CrbRG4w5.js";import"./makeExternalStore-DAW5CeGe.js";import"./Tooltip-B-wMuj2p.js";import"./PopoverPopup-BbibQ6TS.js";import"./debounce-D1aWhqSl.js";import"./useOsdkClient-V2N--xWx.js";import"./tick-DYY6YpT9.js";import"./DropdownField-hc9k2JiQ.js";import"./isEqual-CsPWNbb2.js";import"./withOsdkMetrics-DKpBc77k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
