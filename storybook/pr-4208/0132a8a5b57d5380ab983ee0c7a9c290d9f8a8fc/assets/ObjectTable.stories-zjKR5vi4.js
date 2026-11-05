import{j as i}from"./iframe-ReE2Q7yp.js";import{O as p}from"./object-table-MAGjIDR9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BkvwDPm-.js";import"./preload-helper-B7Z9MrKi.js";import"./Table-CopLwwJC.js";import"./index-BewkrVTa.js";import"./Dialog-CZ_JPe82.js";import"./cross-jItXGdNq.js";import"./svgIconContainer-DReIj__U.js";import"./useBaseUiId-D8bMBWWs.js";import"./InternalBackdrop-C14mfAnw.js";import"./composite-BwZods8z.js";import"./index-B0bWJrJS.js";import"./index-gciaynI9.js";import"./index-B-CZhjmL.js";import"./useEventCallback-DSxaVaZ9.js";import"./SkeletonBar-C7A8YeA1.js";import"./LoadingCell-CZSCqk4l.js";import"./ColumnConfigDialog-iWINWIDN.js";import"./DraggableList-DYf_eZ1S.js";import"./search-BhOewJBY.js";import"./Input-B8139ni5.js";import"./useControlled-CiRsQt_l.js";import"./Button-BlxZNp8T.js";import"./small-cross-sxi8v31H.js";import"./ActionButton-BbqGHHOq.js";import"./Checkbox-f-XzpaRv.js";import"./useValueChanged-DIzh1Vve.js";import"./CollapsiblePanel-8t3xxJ8x.js";import"./MultiColumnSortDialog-DbqYgnN8.js";import"./MenuTrigger-5_fkVDIe.js";import"./CompositeItem-CiU9fGHE.js";import"./ToolbarRootContext-Bl5a0QSn.js";import"./getDisabledMountTransitionStyles-rH4RKoLB.js";import"./getPseudoElementBounds-iOtDRySU.js";import"./chevron-down-BzzFswn9.js";import"./index-DFSTGtRN.js";import"./error-CPS8uYGW.js";import"./BaseCbacBanner-CqM5sqJ7.js";import"./makeExternalStore-CzYz1Gie.js";import"./Tooltip-CgjwpZg6.js";import"./PopoverPopup-DfcYj7fK.js";import"./debounce-DXVTweio.js";import"./useOsdkClient-CH1S_bx0.js";import"./tick-D9DVZKih.js";import"./DropdownField-usIkxFYB.js";import"./isEqual-BrODwJu8.js";import"./withOsdkMetrics-CzWROb4n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
