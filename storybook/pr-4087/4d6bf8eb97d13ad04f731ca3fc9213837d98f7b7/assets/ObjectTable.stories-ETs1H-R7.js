import{j as i}from"./iframe-H475fjT9.js";import{O as p}from"./object-table-C87-iO9_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CX4MgFJ5.js";import"./preload-helper-4X7ac1X_.js";import"./Table-ixsAcNNl.js";import"./index-xnZyhOap.js";import"./Dialog-CHAvArlz.js";import"./cross-Dm1NPVGS.js";import"./svgIconContainer-DRh8H81_.js";import"./useBaseUiId-D9Y7uIA_.js";import"./InternalBackdrop-BXEe3g5T.js";import"./composite-BYdl5w4l.js";import"./index-D2G91xGC.js";import"./index-2KdCkDaD.js";import"./index-BKiIIZGc.js";import"./useEventCallback-DKZ2K8mI.js";import"./SkeletonBar-DEUejCfV.js";import"./LoadingCell-C6u6YUMq.js";import"./ColumnConfigDialog-DOmML38G.js";import"./DraggableList-DHk6x8CK.js";import"./search-BeyzIhyn.js";import"./Input-CSGRdmE4.js";import"./useControlled-CTWYlqbQ.js";import"./Button-C-c_YzgP.js";import"./small-cross-CQ-8gmc_.js";import"./ActionButton-ByBqwnle.js";import"./Checkbox-BzN2X95H.js";import"./useValueChanged-D786mFUn.js";import"./CollapsiblePanel-DnbYruvy.js";import"./MultiColumnSortDialog-DQ91TkWR.js";import"./MenuTrigger-DE8c4-c-.js";import"./CompositeItem-Nblbqfxi.js";import"./ToolbarRootContext-DRktyYqF.js";import"./getDisabledMountTransitionStyles-Doqo3qWD.js";import"./getPseudoElementBounds-DKasT9kp.js";import"./chevron-down-BgkFJdjv.js";import"./index-DT4cMJml.js";import"./error-C3Cl8o9I.js";import"./BaseCbacBanner-nH6JuWGN.js";import"./makeExternalStore-DSrF5gYv.js";import"./Tooltip-DjkP-spo.js";import"./PopoverPopup-CzB6XrrJ.js";import"./debounce-CMJV0GRr.js";import"./useOsdkClient-g1QGvPXq.js";import"./tick-DvK5h6T_.js";import"./DropdownField-OZIspKIM.js";import"./isEqual-CHzg_1O3.js";import"./withOsdkMetrics-D1pGtXX8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
