import{j as i}from"./iframe-BwtdJUQ8.js";import{O as p}from"./object-table-av6kKlTv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ckc1HJ-m.js";import"./preload-helper-DJuGrF4Q.js";import"./Table-Z-O0NX-2.js";import"./index-ecbPEJsH.js";import"./Dialog-B_W78HUj.js";import"./cross-D5O7asJB.js";import"./svgIconContainer-BpIR-cOm.js";import"./useBaseUiId-DlvOV9lG.js";import"./InternalBackdrop-CisMUyd7.js";import"./composite-DglRx_pb.js";import"./index-D-6QZGaS.js";import"./index-NBYYlFiK.js";import"./index-BwJhQ8nN.js";import"./useEventCallback-MmoNwFiG.js";import"./SkeletonBar-BlzetxzD.js";import"./LoadingCell-hO_dH2eC.js";import"./ColumnConfigDialog-BfntsKdn.js";import"./DraggableList-BzxAZyLJ.js";import"./search-BMvzDH_4.js";import"./Input-Ckc7B0k2.js";import"./useControlled-CTxNl2GG.js";import"./Button-a-v4YEmM.js";import"./small-cross-I0t2HoBL.js";import"./ActionButton-DqEhm5OJ.js";import"./Checkbox-C99ZgYQU.js";import"./useValueChanged-CCi2b_rF.js";import"./CollapsiblePanel-YpC4VMjy.js";import"./MultiColumnSortDialog-CAn6zX2c.js";import"./MenuTrigger-C5yVijsH.js";import"./CompositeItem-gNAn1-ON.js";import"./ToolbarRootContext-B6jDfH-i.js";import"./getDisabledMountTransitionStyles-CQlZrmJ4.js";import"./getPseudoElementBounds-Bh8KnJGz.js";import"./chevron-down-DAI8xIlK.js";import"./index-BkxqopTp.js";import"./error-B3Glsuys.js";import"./BaseCbacBanner-CKiruCeJ.js";import"./makeExternalStore-BDYC9xXC.js";import"./Tooltip-j2N8aKD1.js";import"./PopoverPopup-tHLORX91.js";import"./debounce-DG4OIz6a.js";import"./useOsdkClient-BqxjQYKW.js";import"./tick-B5x4eMkK.js";import"./DropdownField-DTj4mE1E.js";import"./isEqual-D1B6T6kU.js";import"./withOsdkMetrics-DjmWzspB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
