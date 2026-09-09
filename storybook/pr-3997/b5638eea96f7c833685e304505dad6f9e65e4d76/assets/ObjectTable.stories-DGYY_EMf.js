import{j as i}from"./iframe-9-OswRKS.js";import{O as p}from"./object-table-wpL3Cm1K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CxruYxlN.js";import"./preload-helper-DYL5InEO.js";import"./Table-CvGw4i9O.js";import"./index-SvIFWBde.js";import"./Dialog-C30pJrHD.js";import"./cross-C9OnvPLu.js";import"./svgIconContainer-DVdpIesk.js";import"./useBaseUiId-CXx1U6Z5.js";import"./InternalBackdrop-B8-pARTC.js";import"./composite-BDc56zIL.js";import"./index-HMIJrenA.js";import"./index-D2h7VYDA.js";import"./index-CgAEYrry.js";import"./useEventCallback-Jrhf3FEf.js";import"./SkeletonBar-B0TH4rTw.js";import"./LoadingCell-OeZp9zKS.js";import"./ColumnConfigDialog-CKJWMH1q.js";import"./DraggableList-IWsi11_u.js";import"./search-DPzUsQds.js";import"./Input-0npSrlPh.js";import"./useControlled-CGEFCoiG.js";import"./Button-gzjofzeF.js";import"./small-cross-zc5ZGHVz.js";import"./ActionButton-mnEAQH7e.js";import"./Checkbox-QBMXMF1z.js";import"./useValueChanged-D0cvyeOe.js";import"./CollapsiblePanel-DZN0B05J.js";import"./MultiColumnSortDialog-Qc0ZudeP.js";import"./MenuTrigger-Ql2c4oyO.js";import"./CompositeItem-TZo4ZNUL.js";import"./ToolbarRootContext-DtmptTL0.js";import"./getDisabledMountTransitionStyles-B9CzyLp8.js";import"./getPseudoElementBounds-CkUMfr4i.js";import"./chevron-down-B8yYoTwv.js";import"./index-D44_FbgA.js";import"./error-BLLqk3sD.js";import"./BaseCbacBanner-BSIiSJcU.js";import"./makeExternalStore-D5luXUgx.js";import"./Tooltip-BCzkmJcH.js";import"./PopoverPopup-KmKJk9qz.js";import"./debounce-Bb1Cpy72.js";import"./useOsdkClient-B_1Wh43n.js";import"./tick-DBm-RnL7.js";import"./DropdownField-BZtIeQpR.js";import"./isEqual-CSlBgnD1.js";import"./withOsdkMetrics-DVJybCh6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
