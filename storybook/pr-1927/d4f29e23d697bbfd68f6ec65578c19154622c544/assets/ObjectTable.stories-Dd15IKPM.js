import{j as i}from"./iframe-CA9r65OT.js";import{O as p}from"./object-table-B8U5n0B0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4gHZgPD.js";import"./preload-helper-tCbzRVEA.js";import"./Table-DAotaee0.js";import"./index-3l5n5zjF.js";import"./Dialog-dxbEVI1S.js";import"./cross-BIMMbybY.js";import"./svgIconContainer-CoGSYZNF.js";import"./useBaseUiId-BMe3a5v7.js";import"./InternalBackdrop-B4C5I1Ho.js";import"./composite-DIPm2o_P.js";import"./index-DHaBnaKt.js";import"./index-CllE9Qij.js";import"./index-D3FVanjb.js";import"./useEventCallback-DPVdHCWX.js";import"./SkeletonBar-D7_R5qne.js";import"./LoadingCell-C7J2dC-w.js";import"./ColumnConfigDialog-CDDpuOLV.js";import"./DraggableList-zXzt7i12.js";import"./search-eEATc8rI.js";import"./Input-Bb9nnqm9.js";import"./useControlled-sJGz_czO.js";import"./isEqual-DGMepfsm.js";import"./isObject-oVKSF72a.js";import"./Button-sRGu_cmJ.js";import"./ActionButton-DE8ds1n2.js";import"./Checkbox-C84oN_DZ.js";import"./useValueChanged-x5vBhK6F.js";import"./CollapsiblePanel-BChWOjny.js";import"./MultiColumnSortDialog-CjR0tA4p.js";import"./MenuTrigger-aTtvxf_3.js";import"./CompositeItem-TexNzlTU.js";import"./ToolbarRootContext-g-i8chAa.js";import"./getDisabledMountTransitionStyles-CBaC_3nC.js";import"./getPseudoElementBounds--2ZRF7Zv.js";import"./chevron-down-DgvdmvON.js";import"./index-CDue3-ep.js";import"./error-DnvhBUUT.js";import"./BaseCbacBanner-DK_I6jXP.js";import"./makeExternalStore-DVNiFfiz.js";import"./Tooltip-BYu8SX18.js";import"./PopoverPopup-1bgkwxU4.js";import"./toNumber-DuxtyrCo.js";import"./useOsdkClient-BD7qovSJ.js";import"./tick-Ckzjqq_z.js";import"./DropdownField-B_MVsZV9.js";import"./withOsdkMetrics-MvKispNs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
