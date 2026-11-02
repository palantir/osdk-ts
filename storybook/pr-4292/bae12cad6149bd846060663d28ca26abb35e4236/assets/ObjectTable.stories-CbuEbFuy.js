import{j as i}from"./iframe-DUqIITxH.js";import{O as p}from"./object-table-3HbuhbM-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DYZ_Ao0Y.js";import"./preload-helper-DRNNkrJi.js";import"./Table-Qy9QycEn.js";import"./index-CfKxCZr0.js";import"./Dialog-CQKZhvmg.js";import"./cross-CNr5tSf5.js";import"./svgIconContainer-6SFRCpjB.js";import"./useBaseUiId-kMUnh5gd.js";import"./InternalBackdrop-BhomPwEy.js";import"./composite-DJRtaiwf.js";import"./index-Dsym8n4N.js";import"./index-GkXmmaX0.js";import"./index-BLlR331c.js";import"./useEventCallback-CA5SU1AH.js";import"./SkeletonBar-fzqq3kFc.js";import"./LoadingCell-dwhV2BU5.js";import"./ColumnConfigDialog-JyLsvbUN.js";import"./DraggableList-BJEUmG2J.js";import"./search-BZkb1jfI.js";import"./Input-Ck3038DH.js";import"./useControlled-DnwEhQGz.js";import"./Button-DxPOU_Mc.js";import"./small-cross-DiAkLgef.js";import"./ActionButton-w4Urkbcz.js";import"./Checkbox-BEYrixR_.js";import"./useValueChanged-QI-v-4Vm.js";import"./CollapsiblePanel-BoajmFi9.js";import"./MultiColumnSortDialog-B_lvOEVt.js";import"./MenuTrigger-Bdaly6ds.js";import"./CompositeItem-DA_aeyOT.js";import"./ToolbarRootContext-B4KY25qe.js";import"./getDisabledMountTransitionStyles-g7BSBpZk.js";import"./getPseudoElementBounds-BB5-HDV6.js";import"./chevron-down-5LJm5ghw.js";import"./index-CSve1EYF.js";import"./error-BA5REKvs.js";import"./BaseCbacBanner-BJbK-LLa.js";import"./makeExternalStore-C3reCNG-.js";import"./Tooltip-C187RPOh.js";import"./PopoverPopup-Cb4S25yO.js";import"./debounce-8IWhPKp0.js";import"./useOsdkClient-DYmfz7qm.js";import"./tick-BKBNrx8N.js";import"./DropdownField-D8f8SQmJ.js";import"./isEqual-B7742ZuT.js";import"./withOsdkMetrics-NmiraHl_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
