import{j as i}from"./iframe-ZXzoHhiH.js";import{O as p}from"./object-table-h3QVGvVh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DymIp2kr.js";import"./preload-helper-DhsFpWsY.js";import"./Table-vQUskrri.js";import"./index-D6JbpjtM.js";import"./Dialog-Cu3J7VAN.js";import"./cross-BDa3Cqh0.js";import"./svgIconContainer-CyxxRlZb.js";import"./useBaseUiId-BEvQDTwS.js";import"./InternalBackdrop-DeqY8UDC.js";import"./composite-DpxxpdsF.js";import"./index-C4EsRBVV.js";import"./index-MwZjXXYU.js";import"./index-1Aj9HnSY.js";import"./useEventCallback-DCkbdGrD.js";import"./SkeletonBar-CHhHpHfc.js";import"./LoadingCell-CirgwqUn.js";import"./ColumnConfigDialog-D2TD4xxN.js";import"./DraggableList-BX3OO3XS.js";import"./search-DoYXdjWJ.js";import"./Input-CwIgSFvy.js";import"./useControlled-BJAlfQKj.js";import"./Button-DhRAKbLo.js";import"./small-cross-DDKBRSHE.js";import"./ActionButton-jSPKUpr6.js";import"./Checkbox-BpZRNZ7x.js";import"./useValueChanged-7gcukUj0.js";import"./CollapsiblePanel-qapOzJSJ.js";import"./MultiColumnSortDialog-Dmhecj6h.js";import"./MenuTrigger-ScWPsEpH.js";import"./CompositeItem-SvjwkO0W.js";import"./ToolbarRootContext-BChHSQ55.js";import"./getDisabledMountTransitionStyles-DIJ5QIdA.js";import"./getPseudoElementBounds-DLAzD5Nx.js";import"./chevron-down-CRmz9PAw.js";import"./index-BgW_HH62.js";import"./error-CcJwbQNy.js";import"./BaseCbacBanner-12BFGArk.js";import"./makeExternalStore-BvyDSClC.js";import"./Tooltip-CM4f-N71.js";import"./PopoverPopup-B2VPWRnQ.js";import"./debounce-BU8o5BOZ.js";import"./useOsdkClient-D2I_PQU2.js";import"./tick-DR-3NIno.js";import"./DropdownField-B6H9-I7k.js";import"./isEqual-D2I2WKSa.js";import"./withOsdkMetrics-rJG37D1j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
