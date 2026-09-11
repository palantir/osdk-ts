import{j as i}from"./iframe-q73h-SNz.js";import{O as p}from"./object-table-KjuvFoNU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hb082i9A.js";import"./preload-helper-BvXISORE.js";import"./Table-BS6ZxxSV.js";import"./index-CNgILQVN.js";import"./Dialog-X4SIqq2i.js";import"./cross-UurqhnpQ.js";import"./svgIconContainer-BnJjPefi.js";import"./useBaseUiId-BT4TVIMU.js";import"./InternalBackdrop-3dmgnm-B.js";import"./composite-DsUUOBpL.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./index-CE_isF10.js";import"./useEventCallback-DHiiVSQq.js";import"./SkeletonBar-CyVdL5QR.js";import"./LoadingCell-BKwB91ug.js";import"./ColumnConfigDialog-Cuo6i1hm.js";import"./DraggableList-DYXgWAZz.js";import"./search-CyIDS8Xl.js";import"./Input-CUYY-XQS.js";import"./useControlled-CIDCJXAS.js";import"./Button-DMD0TrjN.js";import"./small-cross-KtqmkdiH.js";import"./ActionButton-DUEoS-Oq.js";import"./Checkbox-CnshtcrJ.js";import"./useValueChanged-vcJ35Sa1.js";import"./CollapsiblePanel-D1igOUIW.js";import"./MultiColumnSortDialog-chUbYR3p.js";import"./MenuTrigger-Dfchi1IP.js";import"./CompositeItem-8Q0GNXmT.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./getDisabledMountTransitionStyles-dAfff5JR.js";import"./getPseudoElementBounds-BcUe90OX.js";import"./chevron-down-CcztAG1Q.js";import"./index-CgMWGLyW.js";import"./error-BBRDAF1W.js";import"./BaseCbacBanner-D5GS6fO6.js";import"./makeExternalStore-CvHnGZr3.js";import"./Tooltip-C1ULjr5P.js";import"./PopoverPopup-Djh0qu5C.js";import"./debounce-DSfFacxB.js";import"./useOsdkClient-CVuR42rF.js";import"./tick-CDEBgOjy.js";import"./DropdownField-DpBuPkD-.js";import"./isEqual-DRblV8Co.js";import"./withOsdkMetrics-mt0BkM0o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
