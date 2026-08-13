import{j as i}from"./iframe-NiFGfRsz.js";import{O as p}from"./object-table-Co0kMHVr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqsMUJt1.js";import"./preload-helper-DCFXQM4X.js";import"./Table-D9-6YVBO.js";import"./index-Dp7XOyO-.js";import"./Dialog-DajmNvWm.js";import"./cross-CFFQ0sQ5.js";import"./svgIconContainer-B-51rSqm.js";import"./useBaseUiId-BZ0T_Y09.js";import"./InternalBackdrop-DAi-KTzQ.js";import"./composite-DizwB12a.js";import"./index-vXDAK5tU.js";import"./index-BN_cMd1l.js";import"./index-cWSUoc8b.js";import"./useEventCallback-tF3gctSP.js";import"./SkeletonBar-BlLnyVx8.js";import"./LoadingCell-B6hvHZ1V.js";import"./ColumnConfigDialog-BfgxV-wF.js";import"./DraggableList-CPfbGln-.js";import"./search-X81DnpVg.js";import"./Input-gKc9tvRQ.js";import"./useControlled-BmoBTadd.js";import"./Button-D8xL5lB5.js";import"./small-cross-CeI0m1pY.js";import"./ActionButton-CfUr3RjE.js";import"./Checkbox-BOLEvp6U.js";import"./useValueChanged-B2_iof2Z.js";import"./CollapsiblePanel-BYCYtPW9.js";import"./MultiColumnSortDialog-NC5qXB_v.js";import"./MenuTrigger-q94kD1PH.js";import"./CompositeItem-bzaX9daE.js";import"./ToolbarRootContext-CC3NWZjB.js";import"./getDisabledMountTransitionStyles-BUiwQ7FC.js";import"./getPseudoElementBounds-CBkbD7R-.js";import"./chevron-down-h41veWCf.js";import"./index-kWkA5eh9.js";import"./error-CZNtpaf8.js";import"./BaseCbacBanner-BISX0EDQ.js";import"./makeExternalStore-jd4qdjld.js";import"./Tooltip-DHIqFccA.js";import"./PopoverPopup-B4aC61JR.js";import"./toNumber-CVExGNiV.js";import"./useOsdkClient-BQHNmPmn.js";import"./tick-BD0BHmQw.js";import"./DropdownField-Cz9pU8vl.js";import"./withOsdkMetrics-DdyqXqjN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
