import{j as i}from"./iframe-ca23OhYy.js";import{O as p}from"./object-table-wEaVQDYc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DNh6lN0Z.js";import"./preload-helper-CpBe6w6L.js";import"./Table-BP5JyPSM.js";import"./index-CSQGa-uf.js";import"./Dialog-Bg0B1dRX.js";import"./cross-CETsQjwW.js";import"./svgIconContainer-DY2iVrle.js";import"./useBaseUiId-BFRON7cN.js";import"./InternalBackdrop-BD_kNEKT.js";import"./composite-D8ER8GvA.js";import"./index-rx-oKm__.js";import"./index-4C3ZxLWs.js";import"./index-_isEvDLT.js";import"./useEventCallback-B5TdNu7r.js";import"./SkeletonBar-iGP3E_gb.js";import"./LoadingCell-DUpYKrDI.js";import"./ColumnConfigDialog-D1XljsR8.js";import"./DraggableList-CmOHeOhh.js";import"./search-RTWZj0KA.js";import"./Input-CDnjWJWA.js";import"./useControlled-C1AlQciX.js";import"./Button-DRovoLAj.js";import"./small-cross-DKWrBlfW.js";import"./ActionButton--CJ0iKEB.js";import"./Checkbox-DYNFlkDz.js";import"./useValueChanged-D-liDC3H.js";import"./CollapsiblePanel-CO3SJ3wp.js";import"./MultiColumnSortDialog-BSJEKruq.js";import"./MenuTrigger-BD0ejQtC.js";import"./CompositeItem-B-dNGI5-.js";import"./ToolbarRootContext-sGl4TGZ5.js";import"./getDisabledMountTransitionStyles-F_MGGD3V.js";import"./getPseudoElementBounds-DOG3HfD3.js";import"./chevron-down-CIVY1k1-.js";import"./index-DwmipJz1.js";import"./error-BW4SFkbJ.js";import"./BaseCbacBanner-oOnZG3e4.js";import"./makeExternalStore-BRJsYdtc.js";import"./Tooltip-0Szhy22Z.js";import"./PopoverPopup-i0IaPECP.js";import"./debounce-Cqzs3vCN.js";import"./useOsdkClient-BgRNBudR.js";import"./tick-MfwPO4IK.js";import"./DropdownField-Bx2rVDJP.js";import"./isEqual-B49J3Sid.js";import"./withOsdkMetrics-DVtZ9wxA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
