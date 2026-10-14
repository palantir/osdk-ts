import{j as i}from"./iframe-DIE5EIel.js";import{O as p}from"./object-table-CaoiWXaB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hFeTwdib.js";import"./preload-helper-CcEYMKBV.js";import"./Table-D9AdOswb.js";import"./index-gAWb2dR9.js";import"./Dialog-BP0ffE7w.js";import"./cross-siN9VgW1.js";import"./svgIconContainer-Rj0rqZar.js";import"./useBaseUiId-DU3L5eHE.js";import"./InternalBackdrop-bmHbSXL3.js";import"./composite-DJfb-Teu.js";import"./index-C3GNYR7s.js";import"./index-DMxLJ88X.js";import"./index-BZq84Z7C.js";import"./useEventCallback-B0bLIt0P.js";import"./SkeletonBar-D76bwfQy.js";import"./LoadingCell-B6b6ghEr.js";import"./ColumnConfigDialog-B6ZffT4C.js";import"./DraggableList-DI8sydkc.js";import"./search-UnQR1AsU.js";import"./Input-Co7zI1L-.js";import"./useControlled-ddG6ulVP.js";import"./Button-DGriahwu.js";import"./small-cross-lJu3Ep8h.js";import"./ActionButton-8CkxKFOD.js";import"./Checkbox-BJkvdg_F.js";import"./useValueChanged-DM4JlENq.js";import"./CollapsiblePanel-DQyn2L9g.js";import"./MultiColumnSortDialog-CqpZOBHM.js";import"./MenuTrigger-C2K-9tUf.js";import"./CompositeItem-Crvs63Hb.js";import"./ToolbarRootContext-DFNBF5NL.js";import"./getDisabledMountTransitionStyles-CwBqMOC1.js";import"./getPseudoElementBounds-Bwg4v7rW.js";import"./chevron-down-CUqhLbkD.js";import"./index-CPNhCNUx.js";import"./error-aWHvmhUp.js";import"./BaseCbacBanner-CDjIDA9k.js";import"./makeExternalStore-DI81UbPt.js";import"./Tooltip-Cned3Nwd.js";import"./PopoverPopup-CLAGuQ7U.js";import"./debounce-DepqpmZg.js";import"./useOsdkClient-DwzaMKsX.js";import"./tick-C7X7rsGG.js";import"./DropdownField-C-mwMtZa.js";import"./isEqual-CABNp4vG.js";import"./withOsdkMetrics-BWchHor7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
