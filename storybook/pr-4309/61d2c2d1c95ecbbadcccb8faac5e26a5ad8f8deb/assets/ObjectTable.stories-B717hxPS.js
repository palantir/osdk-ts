import{j as i}from"./iframe-CHKcZgb7.js";import{O as p}from"./object-table-CyRHoSq9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZYV-riS.js";import"./preload-helper-ebqo0JEM.js";import"./Table-DpgWkMa-.js";import"./index-BACJcPnF.js";import"./Dialog-CScZ8Bvj.js";import"./cross-Dk2dXrK7.js";import"./svgIconContainer-DY2QJrYz.js";import"./useBaseUiId-Cxc3vcrN.js";import"./InternalBackdrop-CusfxTNT.js";import"./composite-B6ohSiOB.js";import"./index-B0dGrXCM.js";import"./index-DHY3CWWm.js";import"./index-B7FvQMnW.js";import"./useEventCallback-5QUQz0lM.js";import"./SkeletonBar-BfLhsQBW.js";import"./LoadingCell-BztFPbfy.js";import"./ColumnConfigDialog-BKudSkg0.js";import"./DraggableList-C9WXx5Ua.js";import"./search-B4aplnsV.js";import"./Input-ByMels_v.js";import"./useControlled-aYGdNSsu.js";import"./Button-CiSWKai0.js";import"./small-cross-CG4ID_KO.js";import"./ActionButton-DTs1yjbe.js";import"./Checkbox-DowlVZ3I.js";import"./useValueChanged-CeGdvOdh.js";import"./CollapsiblePanel-CoovcH6q.js";import"./MultiColumnSortDialog-Bs9s_Iyt.js";import"./MenuTrigger-dpgwmopl.js";import"./CompositeItem-Brzkx-fO.js";import"./ToolbarRootContext-C-44hQT7.js";import"./getDisabledMountTransitionStyles-Dg77_XEZ.js";import"./getPseudoElementBounds-CDFDrqWX.js";import"./chevron-down-rruGkt0O.js";import"./index-BMxA9FcH.js";import"./error-3jD31VOr.js";import"./BaseCbacBanner-CrOdu8cS.js";import"./makeExternalStore-BWTgA4er.js";import"./Tooltip-D7qyJWee.js";import"./PopoverPopup-DZPcNR2_.js";import"./debounce-BI5dqIT5.js";import"./useOsdkClient-DiOlSmjl.js";import"./tick-Cbk0zspt.js";import"./DropdownField-JI6iE4-V.js";import"./isEqual-DmU6FREb.js";import"./withOsdkMetrics-CfcXJ1po.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
