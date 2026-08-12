import{j as i}from"./iframe-DRBkbE1i.js";import{O as p}from"./object-table-C_j_0jcR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cb-7YRvl.js";import"./preload-helper-Bhy-vhLy.js";import"./Table-C1q3NVW5.js";import"./index-Ga9rMgQo.js";import"./Dialog-DpzItFLS.js";import"./cross-0Mj0-pu3.js";import"./svgIconContainer-GQruUs5P.js";import"./useBaseUiId-BZVOUgQ3.js";import"./InternalBackdrop-1gUwgard.js";import"./composite-D-yjAodN.js";import"./index-BnWv0qmu.js";import"./index-ucRzESfs.js";import"./index-sOMbo7xM.js";import"./useEventCallback-CrX-MfN8.js";import"./SkeletonBar-Du0j_bJ1.js";import"./LoadingCell-B-pvt2hb.js";import"./ColumnConfigDialog-D9xD06Iq.js";import"./DraggableList-ClvcvVVQ.js";import"./search-BCFpbh-w.js";import"./Input-5siurHkP.js";import"./useControlled-DwqloCO6.js";import"./isEqual-BUHBmoa0.js";import"./isObject-DtZ0hGEB.js";import"./Button-BLvvEGYy.js";import"./ActionButton-C53YW_7q.js";import"./Checkbox-ClDUwm9r.js";import"./useValueChanged-CwOVIz65.js";import"./CollapsiblePanel-B6DMNgeu.js";import"./MultiColumnSortDialog-DwXXtltp.js";import"./MenuTrigger-Cb_yabDY.js";import"./CompositeItem-DFqDcWEk.js";import"./ToolbarRootContext-D1BoJMvj.js";import"./getDisabledMountTransitionStyles-BsNbfQXH.js";import"./getPseudoElementBounds-BEb3Hnaa.js";import"./chevron-down-XFaMqkP6.js";import"./index-CV6Dvu1R.js";import"./error-CZAmZxlc.js";import"./BaseCbacBanner-DHSUKASY.js";import"./makeExternalStore-zFNhFc_7.js";import"./Tooltip-kNmVaPUd.js";import"./PopoverPopup-DnoVF_UW.js";import"./toNumber-Bn9QajWk.js";import"./useOsdkClient-CJVpIN8w.js";import"./tick-HaTM7KoE.js";import"./DropdownField-DuRoHfH_.js";import"./withOsdkMetrics-BK4JgsVP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
