import{j as i}from"./iframe-DZC97llC.js";import{O as p}from"./object-table-BvoRX1zu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Baix0xkA.js";import"./preload-helper-BKx802u_.js";import"./Table-4KaxNDjT.js";import"./index-B22k2ynk.js";import"./Dialog-CGcdHCLE.js";import"./cross-C2TZ8jDw.js";import"./svgIconContainer-CHUDLQoK.js";import"./useBaseUiId-C8ARUDoV.js";import"./InternalBackdrop-LhRnITuT.js";import"./composite-4CN6pmFS.js";import"./index-BMmTsFSZ.js";import"./index-CvyqG3Nj.js";import"./index-CibQtp_x.js";import"./useEventCallback-Ag7fNwiL.js";import"./SkeletonBar-JfMe0flw.js";import"./LoadingCell-obA1Lgn0.js";import"./ColumnConfigDialog-C0TComqG.js";import"./DraggableList-BupIVpou.js";import"./search-D_uWqWVr.js";import"./Input-CJlK5efb.js";import"./useControlled-CM4OrEQX.js";import"./Button-BKAvQm5U.js";import"./small-cross-FQOqopzh.js";import"./ActionButton-CBA28Gab.js";import"./Checkbox-Cqb3AtxC.js";import"./useValueChanged-BoneQYDH.js";import"./CollapsiblePanel-DNCdIVRX.js";import"./MultiColumnSortDialog--dJViONo.js";import"./MenuTrigger-vVpla90o.js";import"./CompositeItem-7MvBWb4V.js";import"./ToolbarRootContext-D7J-RjRt.js";import"./getDisabledMountTransitionStyles-C1vTwI5a.js";import"./getPseudoElementBounds-D-Dakysl.js";import"./chevron-down-CiXO6Fic.js";import"./index-kEMBdBjV.js";import"./error-CWLyhGEl.js";import"./BaseCbacBanner-D0kGWzY9.js";import"./makeExternalStore-B1reYnYy.js";import"./Tooltip-C_x2xNl8.js";import"./PopoverPopup-DEmuvAFX.js";import"./debounce-iD7mg0vi.js";import"./useOsdkClient-_TEeh3W2.js";import"./tick-DTIKTJ7D.js";import"./DropdownField-C2RCfl6F.js";import"./isEqual-BjCYvD21.js";import"./withOsdkMetrics-CTgXxJzO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
