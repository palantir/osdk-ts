import{j as i}from"./iframe-70ZuGjkJ.js";import{O as p}from"./object-table-BBc3Fn8T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWQt5WSM.js";import"./preload-helper-DK4xKHY4.js";import"./Table-aU-H_NwX.js";import"./index-CckhOj8-.js";import"./Dialog-Ct-6ZDgi.js";import"./cross-CO8zitM2.js";import"./svgIconContainer-CtTs4nyb.js";import"./useBaseUiId-CqgzcpTd.js";import"./InternalBackdrop-BAIsbWIF.js";import"./composite-E4mw46H8.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./index-CPgNI8HV.js";import"./useEventCallback-Cl-1X7df.js";import"./SkeletonBar-t3va8Dsz.js";import"./LoadingCell-DR2MUXbF.js";import"./ColumnConfigDialog-B1vOObiT.js";import"./DraggableList-DZlKofNL.js";import"./search-_UcRnrjw.js";import"./Input-sBtVPl75.js";import"./useControlled-0e2XrUt8.js";import"./Button-D2KYgMT_.js";import"./small-cross-CYwlKW4r.js";import"./ActionButton-B4h22XNy.js";import"./Checkbox-C8sqlJMk.js";import"./useValueChanged-CQFhtmgn.js";import"./CollapsiblePanel-2ZNF-ZYn.js";import"./MultiColumnSortDialog-aAcEJHDq.js";import"./MenuTrigger-_GYM6HPo.js";import"./CompositeItem-A9SMjz1N.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./getDisabledMountTransitionStyles-DjkGWHfc.js";import"./getPseudoElementBounds-CmYlGZ2P.js";import"./chevron-down-BPIjaHnC.js";import"./index-C1hIfcQ2.js";import"./error-Ho0rrjia.js";import"./BaseCbacBanner-ASzHDe0B.js";import"./makeExternalStore-Vi6b8A7J.js";import"./Tooltip-I-YOK7jy.js";import"./PopoverPopup-Cy9eVAix.js";import"./debounce-B50OUnXf.js";import"./useOsdkClient-D5Q8UXIy.js";import"./tick-eYRv4TLQ.js";import"./DropdownField-B1h3MVUP.js";import"./isEqual-Cp8PtEv6.js";import"./withOsdkMetrics-DyYS57kA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
