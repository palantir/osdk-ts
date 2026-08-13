import{j as i}from"./iframe-B3GwK4s3.js";import{O as p}from"./object-table-CqMZrAxw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CVKTiRt0.js";import"./preload-helper-DJ-YN-iG.js";import"./Table-Dm2GdYCJ.js";import"./index-Cz6EBUKe.js";import"./Dialog-D94UPfPg.js";import"./cross-DaQTNtqn.js";import"./svgIconContainer-11sW1-xS.js";import"./useBaseUiId-Boj-QUxa.js";import"./InternalBackdrop-DgczOFjl.js";import"./composite-PxQPegKz.js";import"./index-CliIsbDx.js";import"./index-B1tSWc_A.js";import"./index-DPQpupOU.js";import"./useEventCallback-qiaal7tY.js";import"./SkeletonBar-8YAbkJed.js";import"./LoadingCell-C50fSrmY.js";import"./ColumnConfigDialog-C-C3QQuN.js";import"./DraggableList-C0KREyCG.js";import"./search-k6RbeZC_.js";import"./Input-pJTRV29h.js";import"./useControlled-DDUO_V7t.js";import"./Button-jfTE2vPB.js";import"./small-cross-CvbZSduI.js";import"./ActionButton-4vZKcE6j.js";import"./Checkbox-BqwFp9dy.js";import"./useValueChanged-Cqlij2fS.js";import"./CollapsiblePanel-DqUvv6bf.js";import"./MultiColumnSortDialog-DY6Qe2-5.js";import"./MenuTrigger-BAS276W-.js";import"./CompositeItem-Cht7Ot0q.js";import"./ToolbarRootContext-CbqesPbi.js";import"./getDisabledMountTransitionStyles-Du3xy9HP.js";import"./getPseudoElementBounds-nxeKvjir.js";import"./chevron-down-D1x0iG-D.js";import"./index-BCQ5Sf7j.js";import"./error-CaJ_TOjb.js";import"./BaseCbacBanner-DnGnVSrn.js";import"./makeExternalStore-DvtS8XD8.js";import"./Tooltip-BDVpcUa4.js";import"./PopoverPopup-CyAan2V3.js";import"./debounce-BGH6TLhD.js";import"./useOsdkClient-D4VDr9Gn.js";import"./tick-CKHk03q2.js";import"./DropdownField-Cw6DGzxj.js";import"./isEqual-D9n9eSFb.js";import"./withOsdkMetrics-Dzvz1nJj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
