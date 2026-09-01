import{j as i}from"./iframe-DkOKI-zj.js";import{O as p}from"./object-table-Di8DTL1R.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_DfnU4LD.js";import"./preload-helper-BedFcYWj.js";import"./Table-DQhPss-2.js";import"./index-D48E-jGx.js";import"./Dialog-T66-hdi9.js";import"./cross-BAQJRB0k.js";import"./svgIconContainer-DdqlG__h.js";import"./useBaseUiId-hIsI1Ivz.js";import"./InternalBackdrop-PNkMbD5Q.js";import"./composite-D6LFofvV.js";import"./index-Cul3U-EW.js";import"./index-BzBoChRE.js";import"./index-l61FzHwI.js";import"./useEventCallback-Df5LXRIF.js";import"./SkeletonBar-Pcg0vYVl.js";import"./LoadingCell-ThFH2l6e.js";import"./ColumnConfigDialog-CBr_DJW6.js";import"./DraggableList-DR8UDqzR.js";import"./search-C0Wwv3jH.js";import"./Input-CkTh5rVe.js";import"./useControlled-B-VxAfVU.js";import"./Button-BECGNN6S.js";import"./small-cross-K0beemaL.js";import"./ActionButton-DpOgAirr.js";import"./Checkbox-DbkOBHsF.js";import"./useValueChanged-DVDHy3eE.js";import"./CollapsiblePanel-Bx0mz0GR.js";import"./MultiColumnSortDialog-DCHCGVHa.js";import"./MenuTrigger-CeucYaYG.js";import"./CompositeItem-B4iJlHXi.js";import"./ToolbarRootContext-CK3JrOY-.js";import"./getDisabledMountTransitionStyles-CXRfGTML.js";import"./getPseudoElementBounds-D8_q1n_o.js";import"./chevron-down-CL9C1vsy.js";import"./index-i7VgI47A.js";import"./error-CK17bhMI.js";import"./BaseCbacBanner-ByZyDHoK.js";import"./makeExternalStore-AOqR8Y_j.js";import"./Tooltip-COXqoDJj.js";import"./PopoverPopup-rIEBcJLw.js";import"./debounce-BAkRCUwV.js";import"./useOsdkClient-B8P8_Y82.js";import"./tick-B4YOxSUu.js";import"./DropdownField-C2YB8IHz.js";import"./isEqual-C3EiRbqw.js";import"./withOsdkMetrics-CQ-W79bx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
