import{j as i}from"./iframe-Ee2tiFng.js";import{O as p}from"./object-table-CUw1D6id.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_ns7ype.js";import"./preload-helper-CtRzgCKY.js";import"./Table-B3fwPJtk.js";import"./index-BycdD30l.js";import"./Dialog-CY7xbifw.js";import"./cross-Brhn2tbY.js";import"./svgIconContainer-DBeRHNA7.js";import"./useBaseUiId-Be0iYuTZ.js";import"./InternalBackdrop-CVHBMFpq.js";import"./composite-DV6J8ilo.js";import"./index-JJBCSCXl.js";import"./index-BedpPbbM.js";import"./index-Dk4tKx0P.js";import"./useEventCallback-BNXOMRrJ.js";import"./SkeletonBar-DHXhmo2J.js";import"./LoadingCell-BGlWi5gD.js";import"./ColumnConfigDialog-YeIH7uni.js";import"./DraggableList-DZrBBiAh.js";import"./search-CiSU3HM-.js";import"./Input-QNUgM8xD.js";import"./useControlled-BncLGICw.js";import"./Button-CwIbjmyl.js";import"./small-cross-DuTxQXWE.js";import"./ActionButton-CxqAcUWU.js";import"./Checkbox-C4V2bg8B.js";import"./useValueChanged-PsyQRqEw.js";import"./CollapsiblePanel-BuxKyO81.js";import"./MultiColumnSortDialog-CRwNlqwB.js";import"./MenuTrigger-t9pTxsRD.js";import"./CompositeItem-CLuGmXNA.js";import"./ToolbarRootContext-DJCzTPIr.js";import"./getDisabledMountTransitionStyles-BMpNISPy.js";import"./getPseudoElementBounds-BmhfqGEc.js";import"./chevron-down-CvL73yqq.js";import"./index-DKxbLgfs.js";import"./error-DM4M2_Dk.js";import"./BaseCbacBanner-zBwS6jbd.js";import"./makeExternalStore-BrNx43tP.js";import"./Tooltip-B-8atzAY.js";import"./PopoverPopup-DQm-H_D6.js";import"./debounce-mCmNNuAo.js";import"./useOsdkClient-B-Ywo9RD.js";import"./tick-vr1mqfrV.js";import"./DropdownField-Cn7UYlie.js";import"./isEqual-BpM4g_Rz.js";import"./withOsdkMetrics-D0H1MUTi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
