import{j as i}from"./iframe-ChtCM8dE.js";import{O as p}from"./object-table-lEWKrBl-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CC1ef1rC.js";import"./preload-helper-Cmiw_6tL.js";import"./Table-Fo14aNVc.js";import"./index-uT5HIxUp.js";import"./Dialog-WNRQFbDj.js";import"./cross-Cx7UUYd1.js";import"./svgIconContainer-B0Hb1RBl.js";import"./useBaseUiId-BlvSRiC6.js";import"./InternalBackdrop-B9QtOURg.js";import"./composite-B9COiNPT.js";import"./index-Pe_luz3n.js";import"./index-B31cE8Rp.js";import"./index-BxGNaB71.js";import"./useEventCallback-BwYTBeHy.js";import"./SkeletonBar-BNPeEFnR.js";import"./LoadingCell-BYM8Oqmt.js";import"./ColumnConfigDialog-BfWqmt5e.js";import"./DraggableList-C6aYaLko.js";import"./search-NDA-MaEJ.js";import"./Input-CiDCxeu9.js";import"./useControlled-hlF0PwpK.js";import"./Button-CY6Mleoh.js";import"./small-cross-9UuSLKex.js";import"./ActionButton-DCP5cEeb.js";import"./Checkbox-IMcR4fv8.js";import"./useValueChanged-CTkt07aq.js";import"./CollapsiblePanel-DEfmw082.js";import"./MultiColumnSortDialog-B6ximbEt.js";import"./MenuTrigger-C09kElrQ.js";import"./CompositeItem-DamdrYTg.js";import"./ToolbarRootContext-D57ExyiR.js";import"./getDisabledMountTransitionStyles-B73YPMyD.js";import"./getPseudoElementBounds-bHysKEfO.js";import"./chevron-down-9ZFNeU84.js";import"./index-BcIK4VrX.js";import"./error-C3rrhmyZ.js";import"./BaseCbacBanner-CgvRJ2b5.js";import"./makeExternalStore-CrEYLMCO.js";import"./Tooltip-DfOSlZk9.js";import"./PopoverPopup-BYkXE_FS.js";import"./debounce-BwEiO4_c.js";import"./useOsdkClient-B5IwJgMz.js";import"./tick-BBG2XDQr.js";import"./DropdownField-C9V2hn37.js";import"./isEqual-COlW-oiV.js";import"./withOsdkMetrics-DVdIQmET.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
