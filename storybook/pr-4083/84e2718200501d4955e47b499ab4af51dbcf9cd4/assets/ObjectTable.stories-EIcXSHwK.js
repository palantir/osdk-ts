import{j as i}from"./iframe-DW6PMPsi.js";import{O as p}from"./object-table-CuzsmF62.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CmukXPKZ.js";import"./preload-helper-BlWs9PqI.js";import"./Table-BByxpaH0.js";import"./index-D66c38lk.js";import"./Dialog-Me0GuI6a.js";import"./cross-DYQhBJHJ.js";import"./svgIconContainer-DIp-XZwm.js";import"./useBaseUiId-Ddck3Zgv.js";import"./InternalBackdrop-X_yjMxAR.js";import"./composite-n7_MOsSq.js";import"./index-FqdShp73.js";import"./index-DqyvE86A.js";import"./index-CNbWk23J.js";import"./useEventCallback-BUhR7Jsv.js";import"./SkeletonBar-Crz7mTXk.js";import"./LoadingCell-CgDvg7J2.js";import"./ColumnConfigDialog-CXFK6dt3.js";import"./DraggableList-BxMk7E0p.js";import"./search-C1KQWKmH.js";import"./Input-CpyRhfdw.js";import"./useControlled-DHdXh0yp.js";import"./Button-B-NFgFRe.js";import"./small-cross-DYlbnTj3.js";import"./ActionButton-DAhZ0C2F.js";import"./Checkbox-DA8koocQ.js";import"./useValueChanged-Cw-uGmYM.js";import"./CollapsiblePanel-DhvG3pSs.js";import"./MultiColumnSortDialog-CjC7-HbZ.js";import"./MenuTrigger-BbUKjLJu.js";import"./CompositeItem-Cs1O47Aq.js";import"./ToolbarRootContext-097dpJrh.js";import"./getDisabledMountTransitionStyles-BvAhgIN_.js";import"./getPseudoElementBounds-CkD-GcmM.js";import"./chevron-down-DJEtRyIF.js";import"./index-cpYh8GYP.js";import"./error-DYDpYg5Z.js";import"./BaseCbacBanner-CVurcWY3.js";import"./makeExternalStore-D3FsvLmH.js";import"./Tooltip-D6WhT4El.js";import"./PopoverPopup-jZqoMExH.js";import"./debounce-DNGh4uNI.js";import"./useOsdkClient-DKTAeEoU.js";import"./tick-Dfo8VcHX.js";import"./DropdownField-BD6s7Nxw.js";import"./isEqual-rVE2ttD2.js";import"./withOsdkMetrics-M_tvK9si.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
