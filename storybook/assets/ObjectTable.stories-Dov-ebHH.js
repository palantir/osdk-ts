import{j as i}from"./iframe-ByGxztuR.js";import{O as p}from"./object-table-DZyoOWLx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bh6jhzg_.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DqetcjwK.js";import"./index-C_NmzukE.js";import"./Dialog-B7Nbacy1.js";import"./cross-EOhwFFJB.js";import"./svgIconContainer-GMqm2qsj.js";import"./useBaseUiId-CwX2o4Wt.js";import"./InternalBackdrop-DgqbQRDj.js";import"./composite-DJoo4D6V.js";import"./index-YFgfuOe9.js";import"./index-Das4h1Wa.js";import"./index-CkNTyrKZ.js";import"./useEventCallback-jNWNQjbn.js";import"./SkeletonBar-D-CJ2Xd8.js";import"./LoadingCell-sPBSsQMc.js";import"./ColumnConfigDialog--2P7KNXB.js";import"./DraggableList-CA2K9bf_.js";import"./search-CzmiRz1J.js";import"./Input-CuOC6fkL.js";import"./useControlled-BeV8RDqE.js";import"./Button-BOr-KM70.js";import"./small-cross-BEW2vdRK.js";import"./ActionButton-BlTtKw0A.js";import"./Checkbox-DBVoCxJX.js";import"./useValueChanged-Z8Bv9K84.js";import"./CollapsiblePanel-DhK36AQZ.js";import"./MultiColumnSortDialog-DhbVIDQv.js";import"./MenuTrigger-DLhrvdAe.js";import"./CompositeItem-CzWKxF8z.js";import"./ToolbarRootContext-CvTQ741x.js";import"./getDisabledMountTransitionStyles-C7v_y2WO.js";import"./getPseudoElementBounds-TA-1Gcka.js";import"./chevron-down-Bod3Eu0k.js";import"./index-Bv7C6Zcf.js";import"./error-DHSjI_y4.js";import"./BaseCbacBanner-D1Lz2cp9.js";import"./makeExternalStore-BO8GdXCg.js";import"./Tooltip-DIrk5jKg.js";import"./PopoverPopup-CaNVB3SN.js";import"./Select-CvqHSLxV.js";import"./useOsdkClient-CVOauZ1U.js";import"./tick-BQpeUazS.js";import"./DropdownField-Ce4MJtTK.js";import"./useDebouncedCallback-CiTG6wRJ.js";import"./isEqual-DF2C28I7.js";import"./_baseIsEqual-Ck41N75x.js";import"./stableSerialize-BgLLW9e2.js";import"./withOsdkMetrics-CzSXt9I1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
