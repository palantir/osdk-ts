import{j as i}from"./iframe-rd5WAA9r.js";import{O as p}from"./object-table-Bow1VKQA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dko2D5qU.js";import"./preload-helper-lrQOG99y.js";import"./Table-DOzirBhm.js";import"./index-gTgVe7bx.js";import"./Dialog-BnUjYFDl.js";import"./cross-D4_Lw_xT.js";import"./svgIconContainer-CP_qsPw-.js";import"./useBaseUiId-CEPsQLHg.js";import"./InternalBackdrop-B3L5JllW.js";import"./composite-DkMWUUkG.js";import"./index-DSVS7Qxc.js";import"./index-DUdz8bct.js";import"./index-DmdH8ftz.js";import"./useEventCallback-BZZpTgJM.js";import"./SkeletonBar-m_pUDdbL.js";import"./LoadingCell-BWxNRdoV.js";import"./ColumnConfigDialog-BQZGYE0s.js";import"./DraggableList-Bo75mTut.js";import"./search-C5LSfE4t.js";import"./Input-DFVDug_7.js";import"./useControlled-C60801w-.js";import"./Button-C07SmwTz.js";import"./small-cross-CD337zW0.js";import"./ActionButton-BJYoXnNg.js";import"./Checkbox-DCYSSIxe.js";import"./useValueChanged-Ed2hN9-0.js";import"./CollapsiblePanel-C9Mo0Rxt.js";import"./MultiColumnSortDialog-P5ZGkivr.js";import"./MenuTrigger-DPkzKct5.js";import"./CompositeItem-LJvlu5vM.js";import"./ToolbarRootContext-SIV8jQMI.js";import"./getDisabledMountTransitionStyles-BfSqpHOL.js";import"./getPseudoElementBounds-CPoBq_PV.js";import"./chevron-down-Bd0HHDZf.js";import"./index-DdtePcPk.js";import"./error-YfyqzF-q.js";import"./BaseCbacBanner-DgglHqpD.js";import"./makeExternalStore-DLTAhcmE.js";import"./Tooltip-BRPtYRya.js";import"./PopoverPopup-BmvVKpJX.js";import"./debounce-to-gPRqa.js";import"./useOsdkClient-D69eR1Yy.js";import"./tick-BC2qBGHW.js";import"./DropdownField-CHVnKgEN.js";import"./isEqual-BjUgct-F.js";import"./withOsdkMetrics-DzBl_MBp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
