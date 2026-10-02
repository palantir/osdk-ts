import{j as i}from"./iframe-qTpzqqub.js";import{O as p}from"./object-table-Q8zTruBQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmLWR60s.js";import"./preload-helper-Dn-jOWjK.js";import"./Table-DcXvOPbL.js";import"./index-BOmnG_lN.js";import"./Dialog-Da5O5d0y.js";import"./cross-CnNHuvcS.js";import"./svgIconContainer-Bm8Tr4gZ.js";import"./useBaseUiId-DOsGlG1_.js";import"./InternalBackdrop-ObeoxtxS.js";import"./composite-qaT37KGA.js";import"./index-BVtfFrKv.js";import"./index-JoLmhLbC.js";import"./index-Dkd9PCQh.js";import"./useEventCallback-B_IWet6b.js";import"./SkeletonBar-0MAnKgp-.js";import"./LoadingCell-9bEekYTj.js";import"./ColumnConfigDialog-Bng4q24v.js";import"./DraggableList-BtzQ-KSv.js";import"./search-MdoZShsS.js";import"./Input-DUA3RXYY.js";import"./useControlled-B4JMLJpk.js";import"./Button-DEMuzBDP.js";import"./small-cross-Bjzoktng.js";import"./ActionButton-58YsK2KW.js";import"./Checkbox-DpyKZMI-.js";import"./useValueChanged-25t35zoP.js";import"./CollapsiblePanel-C78dnGmq.js";import"./MultiColumnSortDialog-D2JFrppZ.js";import"./MenuTrigger-DwCvegK_.js";import"./CompositeItem-6iO3e1lI.js";import"./ToolbarRootContext-BKny703T.js";import"./getDisabledMountTransitionStyles-CWddHoMT.js";import"./getPseudoElementBounds-DamjYshO.js";import"./chevron-down-B3fo8V2O.js";import"./index-CXH_UxOS.js";import"./error-Bf3H-zmd.js";import"./BaseCbacBanner-CfqblCC-.js";import"./makeExternalStore-DYaXh9WX.js";import"./Tooltip-CjimaI3D.js";import"./PopoverPopup-DSP2J700.js";import"./debounce-CiWxqlGN.js";import"./useOsdkClient-CXvIaCu6.js";import"./tick-CV3XYpGq.js";import"./DropdownField-nRjqNqNr.js";import"./isEqual-CZ0PM3VD.js";import"./withOsdkMetrics-C5EFq8dH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
