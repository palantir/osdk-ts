import{j as i}from"./iframe-BFbL1Gdy.js";import{O as p}from"./object-table-BHlz1Qzb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNcX7oIj.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHk8vu6g.js";import"./index-B-4LJO37.js";import"./Dialog-tRb13ISr.js";import"./cross-CiiI7JQR.js";import"./svgIconContainer-0lXizkcA.js";import"./useBaseUiId-B_dYCIar.js";import"./InternalBackdrop-CgS-H1_5.js";import"./composite-CD4lktG6.js";import"./index-DDIAvSNo.js";import"./index-B-e29tx4.js";import"./index-D8oWUzRK.js";import"./useEventCallback-C9L2xivg.js";import"./SkeletonBar-CaDduvDQ.js";import"./LoadingCell-CT0rQg-P.js";import"./ColumnConfigDialog-C_QfwcY9.js";import"./DraggableList-BKFkVBQK.js";import"./search-C8I8REFJ.js";import"./Input-CYN8k52N.js";import"./useControlled-ToeGQqG-.js";import"./Button-B0F0CQLE.js";import"./small-cross-Cx_rak8E.js";import"./ActionButton-CvItV4wZ.js";import"./Checkbox-BoNO07xy.js";import"./useValueChanged-CGdMW2jm.js";import"./CollapsiblePanel-dt7gQwV1.js";import"./MultiColumnSortDialog-CtqMqDMQ.js";import"./MenuTrigger-CeLKiBYE.js";import"./CompositeItem-Du8ycWHV.js";import"./ToolbarRootContext-DJCNS1t_.js";import"./getDisabledMountTransitionStyles-DQZbsbN5.js";import"./getPseudoElementBounds-CAtkH-xO.js";import"./chevron-down-BNkVC-pe.js";import"./index-DxV3WRGx.js";import"./error-CA9h5Tsj.js";import"./BaseCbacBanner-DabSZZE-.js";import"./makeExternalStore-Cttn8Ubc.js";import"./Tooltip-BzUCPYl_.js";import"./PopoverPopup-Dy-HzyQe.js";import"./Select-Ca8OZlWh.js";import"./useOsdkClient-CwGjW6j8.js";import"./tick-DI-jk0OK.js";import"./DropdownField-DnpT5rdQ.js";import"./useDebouncedCallback-Clj3Dq5C.js";import"./isEqual-C3incRMf.js";import"./_baseIsEqual-BUpM9Ple.js";import"./stableSerialize-DCEh1d6Y.js";import"./withOsdkMetrics-Ru8uoXDU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
