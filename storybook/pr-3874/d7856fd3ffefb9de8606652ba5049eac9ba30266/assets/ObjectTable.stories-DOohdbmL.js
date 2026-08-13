import{j as i}from"./iframe-C7p8bC4z.js";import{O as p}from"./object-table-rrHUvx8M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--00vzMOa.js";import"./preload-helper-yARIFMHO.js";import"./Table-BoMUec3S.js";import"./index-BSFFflxO.js";import"./Dialog-Bq7KV9Q4.js";import"./cross-D8SQea4D.js";import"./svgIconContainer-Bh8CNGr-.js";import"./useBaseUiId-D7Bs2_0o.js";import"./InternalBackdrop-CCB2qEvA.js";import"./composite-BOtNh-Av.js";import"./index-z04c2hdv.js";import"./index-c3k5U_lr.js";import"./index-4RswbLak.js";import"./useEventCallback-C2562mvs.js";import"./SkeletonBar-js0bkjyh.js";import"./LoadingCell-Q8eaYLNZ.js";import"./ColumnConfigDialog-C5dmJ6l5.js";import"./DraggableList--CB8Ubap.js";import"./search-D9u2yYuj.js";import"./Input-BAFeVd23.js";import"./useControlled-CwSyNuxB.js";import"./Button-DmUpkepK.js";import"./small-cross-CsyJylh1.js";import"./ActionButton-BxbEt6-S.js";import"./Checkbox-CFWr5Fpb.js";import"./useValueChanged-pEEmrO3V.js";import"./CollapsiblePanel-BeWBa9ma.js";import"./MultiColumnSortDialog-CtUkZIxz.js";import"./MenuTrigger-CIfXbfLR.js";import"./CompositeItem-D2oL3zur.js";import"./ToolbarRootContext-D3hUmd4P.js";import"./getDisabledMountTransitionStyles-DhuueIJo.js";import"./getPseudoElementBounds-BtoukLFj.js";import"./chevron-down-DB23ilQg.js";import"./index-TDqpefMN.js";import"./error-DM0DBmSQ.js";import"./BaseCbacBanner-FJJsg6sF.js";import"./makeExternalStore-DDCjJxWP.js";import"./Tooltip-DejVHDp6.js";import"./PopoverPopup-1qbE86q5.js";import"./debounce-CY32HLro.js";import"./useOsdkClient-BlmAulng.js";import"./tick-n--SCLbF.js";import"./DropdownField-Wa7Oy1zJ.js";import"./isEqual-BGjsRR-O.js";import"./withOsdkMetrics-CpiFq1j5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
