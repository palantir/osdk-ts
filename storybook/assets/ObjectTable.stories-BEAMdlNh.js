import{j as i}from"./iframe-DPgxuER0.js";import{O as p}from"./object-table-D3sB9QpA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJXCC-G2.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DAyr6J_f.js";import"./index-CzdpyvEq.js";import"./Dialog-C1KlA-1s.js";import"./cross-BwNaZ3E7.js";import"./svgIconContainer-DIzi4zOb.js";import"./useBaseUiId-Cm7I4H2e.js";import"./InternalBackdrop-C72lhBZT.js";import"./composite-Clt5qWfu.js";import"./index-utaNrd3G.js";import"./index-d7FyALzm.js";import"./index-Dts6GXIP.js";import"./useEventCallback-D98isyqV.js";import"./SkeletonBar-B2m1EgLv.js";import"./LoadingCell-CnWxfi5A.js";import"./ColumnConfigDialog-BAZsmC_M.js";import"./DraggableList-C_lBLUKl.js";import"./search-W4SNOJCm.js";import"./Input-Fe8hZ5NZ.js";import"./useControlled-s_RTodc2.js";import"./isEqual-DoQQjuOl.js";import"./isObject-Dq8xI3s2.js";import"./Button-DEiS8xLS.js";import"./ActionButton-COP86DSV.js";import"./Checkbox-D-KHLlw8.js";import"./useValueChanged-C_uOfymM.js";import"./CollapsiblePanel-Clh-Wdun.js";import"./MultiColumnSortDialog-C23dTAi7.js";import"./MenuTrigger-BHeEl1rC.js";import"./CompositeItem-BfVRyH-B.js";import"./ToolbarRootContext-oAgSrQkI.js";import"./getDisabledMountTransitionStyles-CWoMtXqz.js";import"./getPseudoElementBounds-CbsUepuL.js";import"./chevron-down-4z7FVQbP.js";import"./index-SQJSmql8.js";import"./error-rSfsp2Ux.js";import"./BaseCbacBanner-B2HUdfWo.js";import"./makeExternalStore-DacpQJm5.js";import"./Tooltip-Bq5nKCAb.js";import"./PopoverPopup-BAZGmEaM.js";import"./toNumber-BF7RP0YD.js";import"./useOsdkClient-B39lSgeE.js";import"./tick-DQOEJ2sU.js";import"./DropdownField-DKkpZC4E.js";import"./withOsdkMetrics-C_HRjZ2a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
