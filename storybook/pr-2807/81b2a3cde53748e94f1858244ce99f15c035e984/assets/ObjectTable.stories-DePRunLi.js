import{j as i}from"./iframe-Dqy8JjJj.js";import{O as p}from"./object-table-CaJfh-Qq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C8iC1lEQ.js";import"./preload-helper-DeX6Y_0J.js";import"./Table-C7UVNOf8.js";import"./index-DbFWgCao.js";import"./Dialog-Bi2fbF72.js";import"./cross-D8pajbsG.js";import"./svgIconContainer-8GT6k8lo.js";import"./useBaseUiId-D7f72QTK.js";import"./InternalBackdrop-BvB3kYwS.js";import"./composite-LAPrz1o4.js";import"./index-Cnbuox7q.js";import"./index-C7xgb18W.js";import"./index-CSfsTwM1.js";import"./useEventCallback-AIyjUBuj.js";import"./SkeletonBar-RYI-lGdg.js";import"./LoadingCell-C99T64TC.js";import"./ColumnConfigDialog-18bqhf4t.js";import"./DraggableList-BltL_xZX.js";import"./search-6kgQ8Qok.js";import"./Input-BQAJ5Oey.js";import"./useControlled-RE_-t8KI.js";import"./isEqual-D9q06Aj3.js";import"./isObject-BlPjBZkO.js";import"./Button-BWXSx_LI.js";import"./ActionButton-CC4A3QRH.js";import"./Checkbox-BDTHiVo3.js";import"./useValueChanged-CjfW8p-V.js";import"./CollapsiblePanel-yy0-Nar2.js";import"./MultiColumnSortDialog-wo9g47cC.js";import"./MenuTrigger-D5tYArqn.js";import"./CompositeItem-B4poao_w.js";import"./ToolbarRootContext-DGtiuhh2.js";import"./getDisabledMountTransitionStyles-DcnA9LCH.js";import"./getPseudoElementBounds-DfafWptz.js";import"./chevron-down-DqBsM86l.js";import"./index-Cy83EJpp.js";import"./error-BuVC1iPd.js";import"./BaseCbacBanner-CpmxgztS.js";import"./makeExternalStore-De8hh01J.js";import"./Tooltip-CkPbslSr.js";import"./PopoverPopup-SQtzm6EV.js";import"./toNumber-BF5JM__Y.js";import"./useOsdkClient-AZY6kY-P.js";import"./tick-5octXHfY.js";import"./DropdownField-CO4zaPU2.js";import"./withOsdkMetrics-Dc6gOjLQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
