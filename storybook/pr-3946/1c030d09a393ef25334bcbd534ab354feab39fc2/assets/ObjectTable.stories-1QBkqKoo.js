import{j as i}from"./iframe-h3cXleGN.js";import{O as p}from"./object-table-BsSmMt3L.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-l6imaRZK.js";import"./preload-helper-BQEANbpx.js";import"./Table-BeSToCeZ.js";import"./index-BDLfEa8e.js";import"./Dialog-DeWPPo26.js";import"./cross-BpOPwjmQ.js";import"./svgIconContainer-Cgqw1YBP.js";import"./useBaseUiId-QnAE5tIH.js";import"./InternalBackdrop-BFG2CobT.js";import"./composite-C4e_-FyQ.js";import"./index-k1u2DroK.js";import"./index-vao6BJxf.js";import"./index-CZjWoi_r.js";import"./useEventCallback-BD84mdzL.js";import"./SkeletonBar-B7eIUlus.js";import"./LoadingCell-DNy4vmry.js";import"./ColumnConfigDialog-BeovBTtp.js";import"./DraggableList-BhKO-zfV.js";import"./search-PbFTowl6.js";import"./Input-DMjR7I_H.js";import"./useControlled-eLMBNmJx.js";import"./Button-DFiEOscG.js";import"./small-cross-DY1rLeT4.js";import"./ActionButton-1r00dirM.js";import"./Checkbox-JSGFEMe4.js";import"./useValueChanged-63uAN-SY.js";import"./CollapsiblePanel-Dm7jOilb.js";import"./MultiColumnSortDialog-wzESQhDR.js";import"./MenuTrigger-D8zx6dkR.js";import"./CompositeItem-C-ehMRsr.js";import"./ToolbarRootContext-C2Gw-DxP.js";import"./getDisabledMountTransitionStyles-Bd4mc9iO.js";import"./getPseudoElementBounds-rzVNYAZO.js";import"./chevron-down-rZqsJyY-.js";import"./index-CAJBKKlL.js";import"./error-DtPjeO-n.js";import"./BaseCbacBanner-DoqFMeng.js";import"./makeExternalStore-CiUy57je.js";import"./Tooltip-DrTaG1sU.js";import"./PopoverPopup-uL_4U54p.js";import"./debounce-D47KBTR0.js";import"./useOsdkClient-W_cf0x5J.js";import"./tick-Cy93K5D5.js";import"./DropdownField-ChJiaau3.js";import"./isEqual-BTkpVUie.js";import"./withOsdkMetrics-DXJIt81Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
