import{j as i}from"./iframe-CUE_Kfqx.js";import{O as p}from"./object-table-CEWfoiSN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdeWInFw.js";import"./preload-helper-AIizN4Br.js";import"./Table-DCufzlWH.js";import"./index-BiahB8So.js";import"./Dialog-CFor3Klq.js";import"./cross-x00S7IUW.js";import"./svgIconContainer-BHr2UOEv.js";import"./useBaseUiId-DGLgADwu.js";import"./InternalBackdrop-DEAHptJe.js";import"./composite-hPB6o8bz.js";import"./index-Kj8T-xKz.js";import"./index-Dn1aYiaH.js";import"./index-A749wJ93.js";import"./useEventCallback-CkwTVSxb.js";import"./SkeletonBar-DhtU-Zrt.js";import"./LoadingCell-C1sz1tT0.js";import"./ColumnConfigDialog-mjBg3i76.js";import"./DraggableList-DkjQWzhC.js";import"./search-CrkbBBP3.js";import"./Input-Bbk2_em_.js";import"./useControlled-DMcW3WuP.js";import"./Button-Dhiaj79W.js";import"./small-cross-Bx0oZmc_.js";import"./ActionButton-efTfNcN1.js";import"./Checkbox-BCL1JxZu.js";import"./useValueChanged-CW7Ml1tR.js";import"./CollapsiblePanel-DdEPVr1s.js";import"./MultiColumnSortDialog-ChYV8-74.js";import"./MenuTrigger-bjQLNAOD.js";import"./CompositeItem-B7RByGkr.js";import"./ToolbarRootContext-_FDeKHlj.js";import"./getDisabledMountTransitionStyles-DiWmDOBV.js";import"./getPseudoElementBounds-DPetyz5J.js";import"./chevron-down-DAAZF-qc.js";import"./index-u0e1YJAK.js";import"./error-CgrtB7s8.js";import"./BaseCbacBanner-D-lhjRrs.js";import"./makeExternalStore-CCErHO8u.js";import"./Tooltip-BWS__Wm3.js";import"./PopoverPopup-Bdv4BgKZ.js";import"./debounce-BqRNJlyF.js";import"./useOsdkClient-DXgSXyyY.js";import"./tick-DpDkYcVx.js";import"./DropdownField-DydXRFgV.js";import"./isEqual-C2cRpP-7.js";import"./withOsdkMetrics-Z4Ee0NlE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
