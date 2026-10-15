import{j as i}from"./iframe-D1DnRXYH.js";import{O as p}from"./object-table-DES2_u1T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9ihV0s4.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DmqLzT5l.js";import"./index-BOVyYsBB.js";import"./Dialog-BVX3oafM.js";import"./cross-CSUtUBCJ.js";import"./svgIconContainer-CThNxl0n.js";import"./useBaseUiId-BdlOppAL.js";import"./InternalBackdrop-CwDFLT3m.js";import"./composite-DS57evVk.js";import"./index-fjVXZ-V0.js";import"./index-eqepVRHL.js";import"./index-DxsfHjKY.js";import"./useEventCallback-Ca0KASNd.js";import"./SkeletonBar-DphPqPis.js";import"./LoadingCell-Bmf3DHQl.js";import"./ColumnConfigDialog-BBuwqElm.js";import"./DraggableList-QdJNJkWo.js";import"./search-BbGlGWkG.js";import"./Input-BXJLgeNm.js";import"./useControlled-BDwxO80n.js";import"./Button-7tq21DzM.js";import"./small-cross-B-R6m80e.js";import"./ActionButton-Bf99j7AG.js";import"./Checkbox-Das4oVA6.js";import"./useValueChanged-BH0A2zFp.js";import"./CollapsiblePanel-B-RyYn8y.js";import"./MultiColumnSortDialog-LhxyCZ9I.js";import"./MenuTrigger-B6EI5r-J.js";import"./CompositeItem-COpco4va.js";import"./ToolbarRootContext-B2fwojw5.js";import"./getDisabledMountTransitionStyles-DPsiGUxU.js";import"./getPseudoElementBounds-DM5-UIyf.js";import"./chevron-down-CE6TeLM9.js";import"./index-CRDubvT7.js";import"./error-PWaSqDvq.js";import"./BaseCbacBanner-DeWdVL1r.js";import"./makeExternalStore-RyYPhhMJ.js";import"./Tooltip-DQWisYIT.js";import"./PopoverPopup-CCyG4Nmv.js";import"./debounce-CV-5WpHu.js";import"./useOsdkClient-BcNSxg1j.js";import"./tick-thvbYd_R.js";import"./DropdownField-BddjJbE_.js";import"./isEqual-Bkx8zYSE.js";import"./withOsdkMetrics-BIY3fItA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
