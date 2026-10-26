import{j as i}from"./iframe-BX9a9lIA.js";import{O as p}from"./object-table-C9_bf-JA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Be0jt3r4.js";import"./preload-helper-BlXb_Vg9.js";import"./Table-DoTBy3cy.js";import"./index-DU3Z-NO3.js";import"./Dialog-BHtEZgzi.js";import"./cross-DuBsq8tA.js";import"./svgIconContainer-UHOj5M6P.js";import"./useBaseUiId-rZTTYrCD.js";import"./InternalBackdrop-D0pdeOz1.js";import"./composite-BZsQ_ZE_.js";import"./index-Xkcqocgf.js";import"./index-Cmn1GPS_.js";import"./index-BGOtK9pW.js";import"./useEventCallback-BewJa_r1.js";import"./SkeletonBar-CvROekkE.js";import"./LoadingCell-CCxJlqw1.js";import"./ColumnConfigDialog-e0j7wZ87.js";import"./DraggableList-B6Z0nOYU.js";import"./search-D5VPbQqk.js";import"./Input-R8AltOJ3.js";import"./useControlled-D1C6STzO.js";import"./Button-nhugV28E.js";import"./small-cross-CEZM1_xp.js";import"./ActionButton-FmCiWWCn.js";import"./Checkbox-D8zEtcjh.js";import"./useValueChanged-jvisKX1J.js";import"./CollapsiblePanel-CKvjIGAx.js";import"./MultiColumnSortDialog-DvmjnIY_.js";import"./MenuTrigger-DyrwgVGJ.js";import"./CompositeItem-h-F_V8Zb.js";import"./ToolbarRootContext-CfpoMHoy.js";import"./getDisabledMountTransitionStyles-GzpTE14B.js";import"./getPseudoElementBounds-DTY5_p4Y.js";import"./chevron-down-Baa_eZBL.js";import"./index-CGQ8sj2I.js";import"./error-BEhn7utC.js";import"./BaseCbacBanner-D1vQrPhP.js";import"./makeExternalStore-BYhN6o4S.js";import"./Tooltip-DIBDL7CT.js";import"./PopoverPopup-B82LsnQc.js";import"./debounce-BV21oJOA.js";import"./useOsdkClient-Bh-oR6BU.js";import"./tick-BulTBCV9.js";import"./DropdownField-aWbBYl77.js";import"./isEqual-BvwvV_z2.js";import"./withOsdkMetrics-C7fLYswC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
