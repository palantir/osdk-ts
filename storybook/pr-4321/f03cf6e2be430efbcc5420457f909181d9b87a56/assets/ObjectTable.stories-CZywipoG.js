import{j as i}from"./iframe-CvOjOlaX.js";import{O as p}from"./object-table-DJxn76kw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D1kcPaO7.js";import"./preload-helper-CMIwN0Ht.js";import"./Table-DizCUzxK.js";import"./index-CrAKByIV.js";import"./Dialog-CWoS9tU-.js";import"./cross-DiBcry41.js";import"./svgIconContainer-CCgDAq3h.js";import"./useBaseUiId-2b2yWiLC.js";import"./InternalBackdrop-DV_lxe_-.js";import"./composite-DBq50y_B.js";import"./index-3CFeZz8S.js";import"./index-BfsFuLyL.js";import"./index-Dr1wgK35.js";import"./useEventCallback-C-ZadIlY.js";import"./SkeletonBar-DzLaCov9.js";import"./LoadingCell-CJ6LPRQM.js";import"./ColumnConfigDialog-Bkx7mFAh.js";import"./DraggableList-BcQmTe18.js";import"./search-C9_Jgha_.js";import"./Input-B3WzxSEN.js";import"./useControlled-Bk4S-y5O.js";import"./Button-VY6TA0Ac.js";import"./small-cross-Ckd7tyu3.js";import"./ActionButton-C7XwUYyd.js";import"./Checkbox-kXhRSsmr.js";import"./useValueChanged-Dv0LQJsd.js";import"./CollapsiblePanel-D-wmv3DK.js";import"./MultiColumnSortDialog-Bq5Tw4Li.js";import"./MenuTrigger-BXHUcTi3.js";import"./CompositeItem-CqY36BxB.js";import"./ToolbarRootContext-jTzvi3TC.js";import"./getDisabledMountTransitionStyles-DS8rYKRs.js";import"./getPseudoElementBounds-BnWyijzd.js";import"./chevron-down-DE6gjpOR.js";import"./index-hoOdhAdW.js";import"./error-BYaZivRW.js";import"./BaseCbacBanner-STYedUYE.js";import"./makeExternalStore-Bvn4jvir.js";import"./Tooltip-D2aVKWxO.js";import"./PopoverPopup-C2Gwi9qi.js";import"./debounce-BV_6a4Da.js";import"./useOsdkClient-uMKq4cOq.js";import"./tick-BMOBXLnC.js";import"./DropdownField-BRePIiwE.js";import"./isEqual-e7LVSkad.js";import"./withOsdkMetrics-BRorics0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
