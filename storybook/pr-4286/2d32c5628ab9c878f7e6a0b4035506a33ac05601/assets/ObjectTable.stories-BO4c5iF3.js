import{j as i}from"./iframe-KThmj19P.js";import{O as p}from"./object-table-jytBJMWC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DbSacC0r.js";import"./preload-helper-Cw3n3hSQ.js";import"./Table-D8GgoVcl.js";import"./index-8dp596C-.js";import"./Dialog-Dzi6uxVP.js";import"./cross-DgJrOo32.js";import"./svgIconContainer-BadPSwg5.js";import"./useBaseUiId-CO0UXqZj.js";import"./InternalBackdrop-ChJvd0mJ.js";import"./composite-DhtQTRu3.js";import"./index-x3jhKnXC.js";import"./index-DlUZDviY.js";import"./index-BDhUGLnw.js";import"./useEventCallback-BfVLO6-q.js";import"./SkeletonBar-B9s5jXE0.js";import"./LoadingCell-B3jp8Y5c.js";import"./ColumnConfigDialog-Oge2l_eU.js";import"./DraggableList-vCl6DQV2.js";import"./search-WKJE02Vc.js";import"./Input-DjgUB-Rn.js";import"./useControlled-Cit5AGWi.js";import"./Button-C5g5AH7h.js";import"./small-cross-BaTPq9PI.js";import"./ActionButton-D6GsiQH8.js";import"./Checkbox-5PSmCHau.js";import"./useValueChanged-BTUlUlPU.js";import"./CollapsiblePanel-BCle4Obe.js";import"./MultiColumnSortDialog-xMkOKsWL.js";import"./MenuTrigger-BVEdcOp-.js";import"./CompositeItem-B-b-pN3u.js";import"./ToolbarRootContext-BtS_uykU.js";import"./getDisabledMountTransitionStyles-B3VVxFZG.js";import"./getPseudoElementBounds-BrM6yGow.js";import"./chevron-down-C1Y2Cd7i.js";import"./index-BzpGTle2.js";import"./error-BU9XZpJG.js";import"./BaseCbacBanner-kwcHIsZg.js";import"./makeExternalStore-BCV4KITu.js";import"./Tooltip-DQdCr4CI.js";import"./PopoverPopup-C7b8KTlQ.js";import"./debounce-CRIHmV_F.js";import"./useOsdkClient-CNuNhGD2.js";import"./tick-B1qLCmei.js";import"./DropdownField-eYleBuTJ.js";import"./isEqual-DoyI84Cq.js";import"./withOsdkMetrics-hz19pnqZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
