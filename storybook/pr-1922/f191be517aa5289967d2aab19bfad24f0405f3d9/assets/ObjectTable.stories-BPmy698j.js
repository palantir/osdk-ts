import{j as i}from"./iframe-B-n5uLkA.js";import{O as p}from"./object-table-DpR_3wrC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dr7LwAEH.js";import"./preload-helper-vxu-jvpO.js";import"./Table-DJglKLQw.js";import"./index-r9aFA9c6.js";import"./Dialog-DJz7Ov-G.js";import"./cross-CzzoI-Me.js";import"./svgIconContainer-BAP4xquW.js";import"./useBaseUiId-Cx3-H6q7.js";import"./InternalBackdrop-DE5d7cjQ.js";import"./composite-CcnMcVoq.js";import"./index-AEeSb7o4.js";import"./index-DKaYQA5S.js";import"./index-CWueSEk2.js";import"./useEventCallback-Cug5Ejgk.js";import"./SkeletonBar-Cy7lWMxB.js";import"./LoadingCell-DR7WlWbN.js";import"./ColumnConfigDialog-BhU-gVnl.js";import"./DraggableList-C1OCbizh.js";import"./search-DCVRYddG.js";import"./Input-LcpenwpJ.js";import"./useControlled-Bce4MQ3D.js";import"./Button-Cxizrf8Y.js";import"./small-cross-xC3C54Po.js";import"./ActionButton-D2uNXT3k.js";import"./Checkbox-CIUBwDNv.js";import"./useValueChanged-DWhuyL2N.js";import"./CollapsiblePanel-D3r1-b_X.js";import"./MultiColumnSortDialog-R4zjE0hh.js";import"./MenuTrigger-BQhRZlK9.js";import"./CompositeItem-Brq4Jfrc.js";import"./ToolbarRootContext-pXgQ7_Yk.js";import"./getDisabledMountTransitionStyles-BWEZuvfD.js";import"./getPseudoElementBounds-DNbnatNp.js";import"./chevron-down-COZB8m2A.js";import"./index-B0qRo9vw.js";import"./error-ctHtVSzl.js";import"./BaseCbacBanner-Ck12EOP4.js";import"./makeExternalStore-CWIwlctc.js";import"./Tooltip-f4HmeV3o.js";import"./PopoverPopup-BoLWF4qb.js";import"./debounce-H1RiGpm9.js";import"./useOsdkClient-CDqx5dcV.js";import"./tick-DdfGjDes.js";import"./DropdownField-BoiijBdj.js";import"./isEqual-DdqzM83-.js";import"./withOsdkMetrics-BSpJ8hG-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
