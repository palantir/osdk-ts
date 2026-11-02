import{j as i}from"./iframe-CZ6tfr7m.js";import{O as p}from"./object-table-TeZXdzkG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BhxgtPAe.js";import"./preload-helper-CkfrOY1H.js";import"./Table-iWuH7aB7.js";import"./index-DLNBYVnV.js";import"./Dialog-B_rsAA2N.js";import"./cross-CPXyH5jR.js";import"./svgIconContainer-Dvg9KYVw.js";import"./useBaseUiId-Cj6LeXHN.js";import"./InternalBackdrop-D2Gwq_Q6.js";import"./composite-BbwXcuXn.js";import"./index-DeteMldf.js";import"./index-BfO80qBP.js";import"./index-DnDjlS1X.js";import"./useEventCallback-CbplXCH5.js";import"./SkeletonBar-CXPy7H-j.js";import"./LoadingCell-CHo40OKN.js";import"./ColumnConfigDialog-CiBeubIz.js";import"./DraggableList-D0IfMbFy.js";import"./search-ztvSGVr9.js";import"./Input-BkVAz5rQ.js";import"./useControlled-BvU1uW5X.js";import"./Button-3RbWO35b.js";import"./small-cross-uWgOqzJ0.js";import"./ActionButton-f-TJoADH.js";import"./Checkbox-DL5Bo1P_.js";import"./useValueChanged-CyVp-7ed.js";import"./CollapsiblePanel-CN460M1M.js";import"./MultiColumnSortDialog-CkONUFM2.js";import"./MenuTrigger-CVtTCyS5.js";import"./CompositeItem-Cl5PbTL3.js";import"./ToolbarRootContext-CRrNmffx.js";import"./getDisabledMountTransitionStyles-iXD11Bdm.js";import"./getPseudoElementBounds-ClrkBtWE.js";import"./chevron-down-DVcYPRuD.js";import"./index-DtElecf-.js";import"./error-d7pkadgS.js";import"./BaseCbacBanner-Dpr6VJnk.js";import"./makeExternalStore-D-O-FofH.js";import"./Tooltip-XgUBv2UC.js";import"./PopoverPopup-spGWFYuF.js";import"./debounce-C_YW27Xf.js";import"./useOsdkClient-BF1kH45K.js";import"./tick-DoJkCuSU.js";import"./DropdownField-BZy1OgIR.js";import"./isEqual-DSvGACqO.js";import"./withOsdkMetrics-B2DbhWLJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
