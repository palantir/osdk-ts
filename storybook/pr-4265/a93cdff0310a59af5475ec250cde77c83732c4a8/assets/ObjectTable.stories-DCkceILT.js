import{j as i}from"./iframe-DT3_qYOR.js";import{O as p}from"./object-table-LeF75zYv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B92uQh67.js";import"./preload-helper-DJcbeZXn.js";import"./Table-BWmN6ZfU.js";import"./index-Bms-eX8O.js";import"./Dialog-BHjZE2PD.js";import"./cross-DsVapprp.js";import"./svgIconContainer-Dzwe0jqD.js";import"./useBaseUiId-Btj_fTu8.js";import"./InternalBackdrop-MxsP_9qP.js";import"./composite-CY9Hfsj0.js";import"./index-BgPwEE_0.js";import"./index-BqtCGU3q.js";import"./index-6H1C3WRO.js";import"./useEventCallback-BU0W5FVD.js";import"./SkeletonBar-CnPcaADz.js";import"./LoadingCell-BMGhiq8R.js";import"./ColumnConfigDialog-Boj7YVRE.js";import"./DraggableList-B9sEl1bX.js";import"./search-mMYnAHur.js";import"./Input-Lzcgvy8p.js";import"./useControlled-CTkDHUnO.js";import"./Button-URBwxfkh.js";import"./small-cross-BRV7Mx-Q.js";import"./ActionButton-CoR5hB92.js";import"./Checkbox-oqjzBYx8.js";import"./useValueChanged-ObbzXgJ2.js";import"./CollapsiblePanel-DspifK_d.js";import"./MultiColumnSortDialog-BUGPwUx0.js";import"./MenuTrigger-vOKFNsqw.js";import"./CompositeItem-DAx93KY8.js";import"./ToolbarRootContext-DRepvQNE.js";import"./getDisabledMountTransitionStyles-DjG_Q61Q.js";import"./getPseudoElementBounds-BwMDZbAq.js";import"./chevron-down-CQZ2GZcC.js";import"./index-kKFIJm10.js";import"./error-CfEF0UDB.js";import"./BaseCbacBanner-DyYO5GA-.js";import"./makeExternalStore-xyuIW0T9.js";import"./Tooltip-DwSDVBmI.js";import"./PopoverPopup-Dx9-HY9B.js";import"./debounce-CFakeUey.js";import"./useOsdkClient-CznSanA6.js";import"./tick-B8N-pAWH.js";import"./DropdownField-B0T5PFQN.js";import"./isEqual-BcnN0Wjy.js";import"./withOsdkMetrics-pibb9djU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
